interface IRefresh {
    jwt: string;
    refreshToken: string;
}

class Fetch {
    private loading: boolean; // Флаг для блокировки повторных обновлений токена
    private jwt: string | null; // JWT токен
    private refreshToken: string | null; // Токен для обновления JWT

    private host = "https://localhost:7116";

    private fetch: AxiosInstance; // Экземпляр axios для запросов
    private connectionHub?: signalR.HubConnection; // Экземпляр SignalR для установки соединения

    constructor() {
        this.loading = false;
        // Получение токенов из локального хранилища
        this.jwt = localStorage.jwt !== 'null' ? localStorage.jwt : null;
        this.refreshToken = localStorage.refreshToken !== 'null' ? localStorage.refreshToken : null;

        // Настройка экземпляра axios для отправки запросов
        this.fetch = axios.create({
            baseURL: this.host,
            headers: {
                accept: "*/*",
                authorization: `Bearer ${this.jwt}` // Добавление JWT токена в заголовок
            },
        });
    }

    private setJwt(jwt: string | null): void {
        this.jwt = jwt;
        if (jwt) {
            this.fetch.defaults.headers["authorization"] = `Bearer ${jwt}`;
        } else {
            this.fetch.defaults.headers["authorization"] = null;
        }
    }

    private createConnectionHub() {
        this.connectionHub = new signalR.HubConnectionBuilder()
            .withUrl(this.host + '/hubs/chat', {
                accessTokenFactory: () => this.jwt ?? ''
            }) // URL хаба SignalR
            .withHubProtocol(new signalR.JsonHubProtocol())
            .build();
        return this.connectionHub;

    }

    private async refresh() {
        const data = {
            jwt: this.jwt,
            refreshToken: this.refreshToken,
        }

        const config = {
            baseURL: this.host,
            headers: {
                authorization: null,
                accept: "*/*",
            },
        }



        return await this.fetch.post(url_post_refresh, data, config)
            .then((response) => {
                const data = response.data as IRefresh;
                this.setRefresh(data.jwt, data.refreshToken);
                return Promise.resolve(data)
            }).catch(() => {
                this.setRefresh(null, null);
                return Promise.reject()
            });
    }

    public hubStart() {
        if (!this.connectionHub) {
            this.connectionHub = this.createConnectionHub();
        }

        return this.connectionHub.start().then(() => {
            console.log('Соединение установлено');
            return Promise.resolve();
        }).catch((err) => {
            console.log('Ошибка подключения: ', err);
            return Promise.reject(err);

        });
    }


    public setRefresh(jwt: string | null, refreshToken: string | null) {
        this.setJwt(jwt);
        this.refreshToken = refreshToken;
        if (this.connectionHub) {
            this.createConnectionHub();
        }
    }


    public onMessage(coolback: (m: MessageClass) => void) {
        if (!this.connectionHub) return;
        this.connectionHub.on('messageReceived', (message) => {
            coolback(new MessageClass(message as IFetchParamsMessage))
        });

    }


    public sendHub(methodName: string, message: unknown) {
        if (!this.connectionHub) return Promise.reject("нет соединения");
        return this.connectionHub.invoke(methodName, message);
    }


    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public get<T = unknown, R = AxiosResponse<T, unknown>, D = unknown>
        (url: string, config?: AxiosRequestConfig<D> | undefined) {
        return this.fetch.get(url, config);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public post<T = unknown, R = AxiosResponse<T, unknown>, D = unknown>
        (url: string, data?: D | undefined, config?: AxiosRequestConfig<D> | undefined) {
        return this.fetch.post(url, data, config);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public delete<T = unknown, R = AxiosResponse<T, unknown>, D = unknown>
        (url: string, config?: AxiosRequestConfig<D> | undefined) {
        return this.fetch.delete(url, config);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public put<T = unknown, R = AxiosResponse<T, unknown>, D = unknown>
        (url: string, data?: D | undefined, config?: AxiosRequestConfig<D> | undefined) {
        return this.fetch.put(url, data, config);
    }

    public async sendRefreshToken(collbac: (jwt: string | null, refreshToken: string | null) => void) {
        this.fetch.interceptors.response.use(
            (response) => response,
            async (error) => {
                const status = error.response ? error.response.status : null;

                if (!this.loading && status === 401) {
                    this.loading = true;
                    return this.refresh().then((data) => {
                        collbac(data.jwt, data.refreshToken)
                        error.config.headers["Authorization"] =
                            "Bearer " + data.jwt;
                        error.config.baseURL = this.host;
                        this.loading = false;
                        return this.fetch.request(error.config);
                    })
                        .catch(() => {
                            collbac(null, null);
                            this.loading = false;
                        });
                }

                return Promise.reject(error);
            }
        );
    }
}
const fetch = new Fetch();
export default fetch;