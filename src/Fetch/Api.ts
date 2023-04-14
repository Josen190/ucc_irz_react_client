import axios, { AxiosInstance } from "axios";
import PropsUser from "./Interface/IUser";
import User from "../Helpers/User";
import PropsNewsComments from "./Interface/INewsComments";
import NewsComments from "../Helpers/NewsComments";
import News from "../Helpers/News";
import MyDate from "../Helpers/MyDate";
import PropsNews from "./Interface/INews";
import Event from "../Helpers/Event";
import PropsEvent from "./Interface/IEvent";
import Image from "../Helpers/Image";
import PropsImage from "./Interface/IImage";
import Position from "../Helpers/Positions";
import PropsPosition from "./Interface/IPositions";
import { authData } from "../Modules/AuthController/Components/AuthController/authController";

export const host = "https://localhost:7116";

// авторизация
export const url_post_authenticate = `/api/authentication/authenticate`;
export const url_post_refresh = `/api/authentication/refresh`;
export const url_put_change_password = `/api/authentication/change_password`;
export const url_post_send_reset_password_url = `/api/authentication/send_reset_password_url`;
export const url_get_reset_password = `/api/authentication/reset_password`;

// кабинеты
export const url_get_cabinets = "/api/cabinets";
export const url_post_cabinets = "/api/cabinets";
export const url_get_cabinets_id_events = (id: string) => {
  return `/api/cabinets/${id}/events`;
};
export const url_put_cabinets_id = (id: string) => {
  return `/api/cabinets/${id}`;
};
export const url_delete_cabinets_id = (id: string) => {
  return `/api/cabinets/${id}`;
};

// чат
export const url_get_chats = "/api/chats";

// События
export const url_get_events_my = "/api/events/my";
export const url_get_events_listenning = "/api/events/listenning";
export const url_get_events_id = (id: string) => {
  return `/api/events/${id}`;
};
export const url_delete_events_id = (id: string) => {
  return `/api/events/${id}`;
};
export const url_post_events = "/api/events";

// Изображения
export const url_get_images_id = (id: string) => {
  return `/api/images/${id}`;
};

// Сообщения
export const url_get_messages = "/api/messages";
export const url_post_messages = "/api/messages";
export const url_delete_messages_id = (id: string) => {
  return `/api/messages/${id}`;
};

// новости
export const url_get_news = `/api/news`;
export const url_post_news = `/api/news`;
export const url_get_news_id = (id: string) => {
  return `/api/news/${id}`;
};
export const url_delete_news_id = (id: string) => {
  return `/api/news/${id}`;
};
export const url_get_news_id_full_text = (id: string) => {
  return `/api/news/${id}/full_text`;
};

// коментарии к новости
export const url_get_news_comments = "/api/news_comments";
export const url_post_news_comments = "/api/news_comments";
export const url_delete_news_comments_id = (id: string) => {
  return `/api/news_comments/${id}`;
};

// Лайки к новости
export const url_post_likes_like_news_entry = "/api/likes/like_news_entry";
export const url_post_likes_unlike_news_entry =
  "/api/likes/unlike_news_entry";

// должности
export const url_get_positions = "/api/positions";
export const url_post_positions = "/api/positions";
export const url_put_positions_id = (id: string) => {
  return `/api/positions${id}`;
};
export const url_post_positions_add_pos_to_user =
  "/api/positions/add_pos_to_user";
export const url_post_positions_remove_user_position =
  "/api/positions/remove_user_position";

// Роли
export const url_get_roles = "/api/roles";
export const url_post_roles_add_to_user = "/api/roles/add_to_user";
export const url_post_roles_remove_from_user = "/api/roles/remove_from_user";

// Подписки
export const url_get_subscriptions_user_subscribers =
  "/api/subscriptions/user_subscribers";
export const url_get_subscriptions_my_subscribers =
  "/api/subscriptions/my_subscribers";
export const url_get_subscriptions_user_subscriptions =
  "/api/subscriptions/user_subscriptions";
export const url_get_subscriptions_my_subscriptions =
  "/api/subscriptions/my_subscriptions";
export const url_post_subscriptions_subcribe = "/api/subscriptions/subcribe";
export const url_post_subscriptions_unsubscribe =
  "/api/subscriptions/unsubscribe";

// должности пользователя
export const url_get_user_positions = "/api/user_positions";
export const url_get_user_positions_my = "/api/user_positions/my";

// пользователь
export const url_get_users = `/api/users`;
export const url_get_users_me = `/api/users/me`;
export const url_get_users_id = (id: string) => {
  return `/api/users/${id}`;
};
export const url_put_users_me_update_photo = "/api/users/me/update_photo";
export const url_put_users_me_delete_photo = "/api/users/me/delete_photo";
export const url_put_users_me_update_info = "/api/users/me/update_info";

// Управление пользователями
export const url_post_users_management_register =
  "/api/users_management/register";
export const url_put_users_management_id_update_reg_info = (id: string) => {
  return `/api/users_management/${id}/update_reg_info`;
};
export const url_delete_users_management_id = (id: string) => {
  return `/api/users_management/${id}`;
};
export const url_put_users_management_id_activate = (id: string) => {
  return `/api/users_management/${id}/activate`;
};
export const url_put_users_management_id_deactivate = (id: string) => {
  return `/api/users_management/${id}/deactivate`;
};


const _data = window.localStorage.getItem("jwt");
const datajwt = _data !== "null" ? _data : "";

class API {
  private static host = "https://localhost:7116";
  private static loading = false;

  private jwt: string | null;
  private refreshToken: string | null;
  private feth: AxiosInstance;


  constructor() {
    this.jwt = window.localStorage.getItem("jwt");
    this.refreshToken = window.localStorage.getItem("refreshToken");
    
    this.feth = axios.create({
      baseURL: API.host,
      headers: {
        authorization:
          this.jwt || this.jwt === "null" || this.jwt === "undifined"
            ? `Bearer ${datajwt}`
            : null,
        accept: "*/*",
      },
    });
  }


  public setJwt(jwt: string | null): void {
    if (jwt) {
      this.feth.defaults.headers["authorization"] = `Bearer ${jwt}`;
    } else {
      this.feth.defaults.headers["authorization"] = null;
    }
  }

  public async authentication(email: string, password: string): Promise<authData> {
    const result: authData | undefined = await this.feth
      .post(url_post_authenticate, {
        email: email,
        password: password,
      })
      .then(async (response) => {
        if (
          typeof response.data.jwt !== "string" ||
          typeof response.data.jwt !== "string"
        )
          return undefined;
        const _data: authData = {
          jwt: response.data.jwt,
          refreshToken: response.data.refreshToken,
          user: null,
        };

        this.setJwt(_data.jwt);

        _data.user = await this.getUserMe()
          .then((user) => user)
          .catch(() => null);

        return _data;
      })
      .catch((error) => undefined);

    if (!result) return Promise.reject();

    console.log(result);
    return Promise.resolve(result);
  }

  public  async refresh(
    jwt: string,
    refreshToken: string,
  ) {
    const result: { jwt: string, refreshToken: string } | undefined = await this.feth.post(url_post_refresh,
      {
        jwt: jwt,
        refreshToken: refreshToken,
      },
      {
        baseURL: API.host,
        headers: {
          authorization: null,
          accept: "*/*",
        },
      }
    ).then((response) => response.data).catch(() => undefined)

    if (!result)
      return Promise.reject(null);

    return Promise.resolve(result);
  }

  public  async getRefreshToken(
    jwt: string,
    refreshToken: string,
    setAuthData: (
      jwt: string | null,
      refreshToken: string | null,
      user?: User | null
    ) => void
  ) {
    this.feth.interceptors.response.use(
      (response) => response,
      async (error) => {
        const status = error.response ? error.response.status : null;

        if (!API.loading && status === 401) {
          API.loading = true;
          return this.refresh(jwt, refreshToken).then((data) => {
            setAuthData(data.jwt, data.refreshToken);
            error.config.headers["Authorization"] =
              "Bearer " + data.jwt;
            error.config.baseURL = host;
            API.loading = false;
            return this.feth.request(error.config);
          })
            .catch(() => {
              setAuthData(null, null, null);
              API.loading = true;
            });
        }

        return Promise.reject(error);
      }
    );
  }

  public  async getUser(id: string): Promise<User> {
    const info_user: PropsUser | undefined = await this.feth
      .get(url_get_users_id(id))
      .then((response) => response.data)
      .catch(() => undefined);

    if (!info_user) {
      return Promise.reject(null);
    }

    return Promise.resolve(new User(info_user));
  }

  public  async getUsers(
    pageIndex: number,
    searchString?: string,
    isActive?: boolean,
    role?: string,
    positionId?: string,
    pageSize = 10
  ): Promise<User[]> {
    const params: { [key: string]: string | number | boolean } = {
      PageIndex: pageIndex,
      PageSize: pageSize,
    };
    if (searchString) params.SearchString = searchString;
    if (isActive) params.IsActive = isActive;
    if (role) params.Role = role;
    if (positionId) params.PositionId = positionId;

    const result: PropsUser[] | undefined = await this.feth
      .get(url_get_users, {
        params: params,
      })
      .then((response) => response.data)
      .catch(() => undefined);

    if (!result) {
      return Promise.reject(null);
    }

    const users: User[] = [];
    result.forEach((_user) => {
      users.push(new User(_user));
    });

    return Promise.resolve(users);
  }

  public  async getUserMe(): Promise<User> {
    const info_user: PropsUser | undefined = await this.feth
      .get(url_get_users_me)
      .then((response) => response.data)
      .catch(() => undefined);

    if (!info_user) {
      return Promise.reject(null);
    }

    return Promise.resolve(new User(info_user));
  }

  public  async putUpdateInfo(
    myself: string,
    iDid: string,
    achievements: string,
    skills: string
  ) {
    this.feth
      .put(url_put_users_me_update_info, {
        aboutMyself: myself,
        myDoings: iDid,
        skills: skills,
      })
      .then(() => {
        Promise.resolve();
      })
      .catch((error) => {
        Promise.reject();
      });
  }

  public  async putChangePassword(
    currentPassword: string,
    newPassword: string
  ): Promise<void | any> {
    this.feth
      .put(url_put_change_password, {
        currentPassword: currentPassword,
        newPassword: newPassword,
      })
      .then(() => {
        Promise.resolve();
      })
      .catch((error) => {
        Promise.reject(error.response.data);
      });
  }

  public  async getNewsComment(): Promise<NewsComments[]> {
    const result: PropsNewsComments[] | undefined = await this.feth
      .get(url_get_news_comments)
      .then((response) => response.data)
      .catch(() => undefined);

    if (!result) {
      return Promise.reject(null);
    }

    const newsComments: NewsComments[] = [];
    result.forEach((_newsComment) => {
      newsComments.push(new NewsComments(_newsComment));
    });

    return Promise.resolve(newsComments);
  }

  public  async getMyEvents(
    start: MyDate,
    end: MyDate
  ): Promise<Event[]> {
    const result: PropsEvent[] | undefined = await this.feth
      .get(url_get_events_my, {
        params: {
          Start: start.toString(),
          End: end.toString(),
        },
      })
      .then((response) => response.data)
      .catch(() => undefined);

    if (!result) {
      return Promise.reject(null);
    }

    const events: Event[] = [];
    result.forEach((_event) => {
      events.push(new Event(_event));
    });

    return Promise.resolve(events);
  }

  public  async getFullTextOfNews(id: string): Promise<string> {
    const result: string | undefined = await this.feth
      .get(url_get_news_id_full_text(id))
      .then((response) => response.data)
      .catch(() => undefined);

    if (!result) {
      return Promise.reject(null);
    }

    return Promise.resolve(result);
  }

  public  async deletComment(id: string) {
    this.feth
      .delete(url_delete_news_comments_id(id))
      .then(() => Promise.resolve())
      .catch(() => Promise.reject());
  }

  public  async postComment(newsID: string, text: string) {
    const result = await this.feth
      .post(url_post_news_comments, {
        newsEntryId: newsID,
        text: text,
      })
      .then((data) => Promise.resolve(data))
      .catch(() => Promise.reject());

      return result;
  }

  public  async postNews(
    title: string,
    content: string,
    isPublic: boolean,
    image?: Image
  ) {
    const data = {
      title: title,
      text: content,
      isPublic: isPublic,
      image: image ? image.toFetch() : null,
    };
    const result = await this.feth
      .post(url_post_news, data)
      .then((data) => Promise.resolve(data.data as string))
      .catch(() => Promise.reject());

    return result;
  }

  public  async getListingNews(
    pageIndex: number,
    userID?: string,
    publicOnly?: boolean,
    likedOnly?: boolean,
    pageSize = 10
  ): Promise<News[]> {
    const params: { [key: string]: string | number | boolean } = {
      PageIndex: pageIndex,
      PageSize: pageSize,
    };
    if (userID) params.AuthorId = userID;

    if (publicOnly) params.PublicOnly = publicOnly;

    if (likedOnly) params.LikedOnly = likedOnly;

    const result: PropsNews[] | undefined = await this.feth
      .get(url_get_news, { params: params })
      .then((response) => response.data)
      .catch((error) => undefined);

    if (!result) return Promise.reject();
    const _arrNews: News[] = [];
    result.forEach((tiding) => {
      _arrNews.push(new News(tiding));
    });
    return Promise.resolve(_arrNews);
  }

  public  async postLike(newsID: string) {
    const params: { [key: string]: string } = {
      newsEntryId: newsID,
    };

    this.feth
      .post(url_post_likes_like_news_entry, undefined, {
        params: params,
      })
      .then(() => Promise.resolve())
      .catch(() => Promise.reject());
  }

  public  async postUnlike(newsID: string) {
    this.feth
      .post(url_post_likes_unlike_news_entry, undefined, {
        params: {
          newsEntryId: newsID,
        },
      })
      .then(() => Promise.resolve())
      .catch(() => Promise.reject());
  }

  public  async deleteNews(id: string) {
    this.feth
      .delete(url_delete_news_id(id))
      .then(() => Promise.resolve())
      .catch(() => Promise.reject());
  }

  public  async unsubscribe(userID: string) {
    this.feth
      .post(url_post_subscriptions_unsubscribe, undefined, {
        params: {
          userId: userID,
        },
      })
      .then(() => Promise.resolve())
      .catch(() => Promise.reject());
  }

  public  async subcribe(userID: string) {
    this.feth
      .post(url_post_subscriptions_subcribe, undefined, {
        params: {
          userId: userID,
        },
      })
      .then(() => Promise.resolve())
      .catch(() => Promise.reject());
  }

  public  async getImage(id: string): Promise<Image> {
    const result: PropsImage | undefined = await this.feth
      .get(url_get_images_id(id))
      .then((response) => response.data)
      .catch(() => undefined);

    if (!result) {
      return Promise.reject(null);
    }

    return Promise.resolve(new Image(result));
  }

  public  async getUserPositions(
    userId: string
  ): Promise<Position[] | null> {
    const result: PropsPosition[] | undefined = await this.feth
      .get(url_get_user_positions, { params: { userId: userId } })
      .then((response) => response.data)
      .catch(() => undefined);

    if (!result) return Promise.reject(null);

    const positions: Position[] = [];
    result.forEach((position) => {
      positions.push(new Position(position));
    });

    return Promise.resolve(positions);
  }
}

export default API;
