import { url_post_refresh } from "Constatnts/url";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";


interface IRefresh {
    jwt: string;
    refreshToken: string;
}

class Fetch {
    private loading: boolean;
    private jwt: string | null;
    private refreshToken: string | null;

    private host = "https://localhost:7116";

    private feth: AxiosInstance;


    constructor() {
        this.loading = false;
        this.jwt = null;
        this.refreshToken = null;

        this.feth = axios.create({
            baseURL: this.host,
            headers: {
                accept: "*/*",
                authorization: `Bearer ${this.jwt}`
            },
        });
    }

    private setJwt(jwt: string | null): void {
        this.jwt = jwt;
        if (jwt) {
            this.feth.defaults.headers["authorization"] = `Bearer ${jwt}`;
        } else {
            this.feth.defaults.headers["authorization"] = null;
        }
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

        const result = await this.feth.post(url_post_refresh, data, config)
            .then((response) => {
                const data = response.data as IRefresh;
                this.setRefres(data.jwt, data.refreshToken);
                return Promise.resolve(data)
            }).catch(() => {
                this.setRefres(null, null);
                return Promise.reject()
            })

        return result;
    }

    public setRefres(jwt: string | null, refreshToken: string | null) {
        this.setJwt(jwt);
        this.refreshToken = refreshToken;
    }

    public get<T = any, R = AxiosResponse<T, any>, D = any>
        (url: string, config?: AxiosRequestConfig<D> | undefined) {
        return this.feth.get(url, config);
    }

    public post<T = any, R = AxiosResponse<T, any>, D = any>
        (url: string, data?: D | undefined, config?: AxiosRequestConfig<D> | undefined) {
        return this.feth.post(url, data, config);
    }

    public delete<T = any, R = AxiosResponse<T, any>, D = any>
        (url: string, config?: AxiosRequestConfig<D> | undefined) {
        return this.feth.delete(url, config);
    }

    public put<T = any, R = AxiosResponse<T, any>, D = any>
        (url: string, data?: D | undefined, config?: AxiosRequestConfig<D> | undefined) {
        return this.feth.put(url, data, config);
    }


    public async sendRefreshToken(collbac: (jwt: string | null, refreshToken: string | null) => void) {
        this.feth.interceptors.response.use(
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
                        return this.feth.request(error.config);
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