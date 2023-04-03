import axios from "axios";
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
import { authData } from "../Components/AuthController/authController";

export const host = "https://localhost:7116";

// авторизация
export const url_post_authenticate = `/Fetch/authentication/authenticate`;
export const url_post_refresh = `/Fetch/authentication/refresh`;
export const url_put_change_password = `/Fetch/authentication/change_password`;
export const url_post_send_reset_password_url = `/Fetch/authentication/send_reset_password_url`;
export const url_get_reset_password = `/Fetch/authentication/reset_password`;

// кабинеты
export const url_get_cabinets = "/Fetch/cabinets";
export const url_post_cabinets = "/Fetch/cabinets";
export const url_get_cabinets_id_events = (id) => {
  return `/Fetch/cabinets/${id}/events`;
};
export const url_put_cabinets_id = (id) => {
  return `/Fetch/cabinets/${id}`;
};
export const url_delete_cabinets_id = (id) => {
  return `/Fetch/cabinets/${id}`;
};

// чат
export const url_get_chats = "/Fetch/chats";

// События
export const url_get_events_my = "/Fetch/events/my";
export const url_get_events_listenning = "/Fetch/events/listenning";
export const url_get_events_id = (id) => {
  return `/Fetch/events/${id}`;
};
export const url_delete_events_id = (id) => {
  return `/Fetch/events/${id}`;
};
export const url_post_events = "/Fetch/events";

// Изображения
export const url_get_images_id = (id) => {
  return `/Fetch/images/${id}`;
};

// Сообщения
export const url_get_messages = "/Fetch/messages";
export const url_post_messages = "/Fetch/messages";
export const url_delete_messages_id = (id) => {
  return `/Fetch/messages/${id}`;
};

// новости
export const url_get_news = `/Fetch/news`;
export const url_post_news = `/Fetch/news`;
export const url_get_news_id = (id) => {
  return `/Fetch/news/${id}`;
};
export const url_delete_news_id = (id) => {
  return `/Fetch/news/${id}`;
};
export const url_get_news_id_full_text = (id) => {
  return `/Fetch/news/${id}/full_text`;
};

// коментарии к новости
export const url_get_news_comments = "/Fetch/news_comments";
export const url_post_news_comments = "/Fetch/news_comments";
export const url_delete_news_comments_id = (id) => {
  return `/Fetch/news_comments/${id}`;
};

// Лайки к новости
export const url_post_likes_like_news_entry = "/Fetch/likes/like_news_entry";
export const url_post_likes_unlike_news_entry =
  "/Fetch/likes/unlike_news_entry";

// должности
export const url_get_positions = "/Fetch/positions";
export const url_post_positions = "/Fetch/positions";
export const url_put_positions_id = (id) => {
  return `/Fetch/positions${id}`;
};
export const url_post_positions_add_pos_to_user =
  "/Fetch/positions/add_pos_to_user";
export const url_post_positions_remove_user_position =
  "/Fetch/positions/remove_user_position";

// Роли
export const url_get_roles = "/Fetch/roles";
export const url_post_roles_add_to_user = "/Fetch/roles/add_to_user";
export const url_post_roles_remove_from_user = "/Fetch/roles/remove_from_user";

// Подписки
export const url_get_subscriptions_user_subscribers =
  "/Fetch/subscriptions/user_subscribers";
export const url_get_subscriptions_my_subscribers =
  "/Fetch/subscriptions/my_subscribers";
export const url_get_subscriptions_user_subscriptions =
  "/Fetch/subscriptions/user_subscriptions";
export const url_get_subscriptions_my_subscriptions =
  "/Fetch/subscriptions/my_subscriptions";
export const url_post_subscriptions_subcribe = "/Fetch/subscriptions/subcribe";
export const url_post_subscriptions_unsubscribe =
  "/Fetch/subscriptions/unsubscribe";

// должности пользователя
export const url_get_user_positions = "/Fetch/user_positions";
export const url_get_user_positions_my = "/Fetch/user_positions/my";

// пользователь
export const url_get_users = `/Fetch/users`;
export const url_get_users_me = `/Fetch/users/me`;
export const url_get_users_id = (id) => {
  return `/Fetch/users/${id}`;
};
export const url_put_users_me_update_photo = "/Fetch/users/me/update_photo";
export const url_put_users_me_delete_photo = "/Fetch/users/me/delete_photo";
export const url_put_users_me_update_info = "/Fetch/users/me/update_info";

// Управление пользователями
export const url_post_users_management_register =
  "/Fetch/users_management/register";
export const url_put_users_management_id_update_reg_info = (id) => {
  return `/Fetch/users_management/${id}/update_reg_info`;
};
export const url_delete_users_management_id = (id) => {
  return `/Fetch/users_management/${id}`;
};
export const url_put_users_management_id_activate = (id) => {
  return `/Fetch/users_management/${id}/activate`;
};
export const url_put_users_management_id_deactivate = (id) => {
  return `/Fetch/users_management/${id}/deactivate`;
};

let datajwt = "";
let data = window.localStorage.getItem("jwt");
if (typeof data === "string") {
  datajwt = data;
} else if (data == null) {
  datajwt = "";
}

class API {
  private static loading = false;
  private static jwt: string | null = window.localStorage.getItem("jwt");
  private static host = "https://localhost:7116";
  public static feth = axios.create({
    baseURL: API.host,
    headers: {
      authorization:
        API.jwt === "null" || API.jwt === "undifined"
          ? `Bearer ${datajwt}`
          : null,
      accept: "*/*",
    },
  });

  public static setJwt(jwt: string | null): void {
    if (jwt) {
      API.feth.defaults.headers["authorization"] = `Bearer ${jwt}`;
    } else {
      API.feth.defaults.headers["authorization"] = null;
    }
  }

  public static async authentication(email: string, password: string) {
    let result: authData | undefined = await this.feth
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

        _data.user = await this.getUserMe()
          .then((user) => user)
          .catch(() => null);
      })
      .catch((error) => undefined);

    if (!result) return Promise.reject();

    return Promise.resolve(result);
  }

  public static async refreshToken(
    jwt: string,
    refreshToken: string,
    setAuthData: Function
  ) {
    this.feth.interceptors.response.use(
      (response) => response,
      async (error) => {
        const status = error.response ? error.response.status : null;

        if (!this.loading && status === 401) {
          this.loading = true;
          return this.feth
            .post(
              url_post_refresh,
              {
                jwt: jwt,
                refreshToken: refreshToken,
              },
              {
                baseURL: this.host,
                headers: {
                  authorization: null,
                  accept: "*/*",
                },
              }
            )
            .then((response) => {
              setAuthData(response.data.jwt, response.data.refreshToken);
              error.config.headers["Authorization"] =
                "Bearer " + response.data.jwt;
              error.config.baseURL = host;
              this.loading = false;
              return this.feth.request(error.config);
            })
            .catch(() => {
              setAuthData(null, null, null, null);
              this.loading = true;
            });
        }

        return Promise.reject(error);
      }
    );
  }

  public static async getUser(id: string): Promise<User | null> {
    const info_user: PropsUser | undefined = await this.feth
      .get(url_get_users_id(id))
      .then((response) => response.data)
      .catch(() => undefined);

    if (!info_user) {
      return Promise.reject(null);
    }

    return Promise.resolve(new User(info_user));
  }

  public static async getUsers(
    pageIndex: number,
    searchString?: string,
    isActive?: boolean,
    role?: string,
    positionId?: string,
    pageSize: number = 10
  ): Promise<User[] | null> {
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

    let users: User[];
    result.forEach((_user) => {
      users.push(new User(_user));
    });

    return Promise.resolve(users);
  }

  public static async getUserMe(): Promise<User | null> {
    const info_user: PropsUser | undefined = await this.feth
      .get(url_get_users_me)
      .then((response) => response.data)
      .catch(() => undefined);

    if (!info_user) {
      return Promise.reject(null);
    }

    return Promise.resolve(new User(info_user));
  }

  public static async putUpdateInfo(
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

  public static async putChangePassword(
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

  public static async getNewsComment(): Promise<NewsComments[] | null> {
    const result: PropsNewsComments[] | undefined = await this.feth
      .get(url_get_news_comments)
      .then((response) => response.data)
      .catch(() => undefined);

    if (!result) {
      return Promise.reject(null);
    }

    let newsComments: NewsComments[];
    result.forEach((_newsComment) => {
      newsComments.push(new NewsComments(_newsComment));
    });

    return Promise.resolve(newsComments);
  }

  public static async getMyEvents(
    start: MyDate,
    end: MyDate
  ): Promise<Event[] | null> {
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

    let events: Event[];
    result.forEach((_event) => {
      events.push(new Event(_event));
    });

    return Promise.resolve(events);
  }

  public static async getFullTextOfNews(id: string): Promise<string | null> {
    const result: string | undefined = await this.feth
      .get(url_get_news_id_full_text(id))
      .then((response) => response.data)
      .catch(() => undefined);

    if (!result) {
      return Promise.reject(null);
    }

    return Promise.resolve(result);
  }

  public static async deletComment(id: string) {
    this.feth
      .delete(url_delete_news_comments_id(id))
      .then(() => Promise.resolve())
      .catch(() => Promise.reject());
  }

  public static async postComment(newsID: string, text: string) {
    this.feth
      .post(url_post_news_comments, {
        newsEntryId: newsID,
        text: text,
      })
      .then(() => Promise.resolve())
      .catch(() => Promise.reject());
  }

  public static async postNews(
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
    this.feth
      .post(url_post_news, data)
      .then(() => Promise.resolve())
      .catch(() => Promise.reject());
  }

  public static async getListingNews(
    pageIndex: number,
    userID?: string,
    publicOnly?: boolean,
    likedOnly?: boolean,
    pageSize: number = 10
  ): Promise<News[]> {
    const params: { [key: string]: string | number | boolean } = {
      PageIndex: pageIndex,
      PageSize: pageSize,
    };
    if (!userID) params.AuthorId = userID;

    if (!publicOnly) params.PublicOnly = publicOnly;

    if (!likedOnly) params.LikedOnly = likedOnly;

    const result: PropsNews[] | undefined = await this.feth
      .get(url_get_news, { params: params })
      .then((response) => response.data)
      .catch((error) => undefined);

    if (!result) return Promise.reject();
    let _arrNews = [];
    result.forEach((tiding) => {
      _arrNews.push(new News(tiding));
    });
    return Promise.resolve(_arrNews);
  }

  public static async postLike(newsID: string) {
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

  public static async postUnlike(newsID: string) {
    this.feth
      .post(url_post_likes_unlike_news_entry, undefined, {
        params: {
          newsEntryId: newsID,
        },
      })
      .then(() => Promise.resolve())
      .catch(() => Promise.reject());
  }

  public static async deleteNews(id: string) {
    this.feth
      .delete(url_delete_news_id(id))
      .then(() => Promise.resolve())
      .catch(() => Promise.reject());
  }

  public static async unsubscribe(userID: string) {
    this.feth
      .post(url_post_subscriptions_unsubscribe, undefined, {
        params: {
          userId: userID,
        },
      })
      .then(() => Promise.resolve())
      .catch(() => Promise.reject());
  }

  public static async subcribe(userID: string) {
    this.feth
      .post(url_post_subscriptions_subcribe, undefined, {
        params: {
          userId: userID,
        },
      })
      .then(() => Promise.resolve())
      .catch(() => Promise.reject());
  }

  public static async getImage(id: string): Promise<Image> {
    const result: PropsImage | undefined = await this.feth
      .get(url_get_images_id(id))
      .then((response) => response.data)
      .catch(() => undefined);

    if (!result) {
      return Promise.reject(null);
    }

    return Promise.resolve(new Image(result));
  }

  public static async getUserPositions(
    userId: string
  ): Promise<Position[] | null> {
    const result: PropsPosition[] | undefined = await this.feth
      .get(url_get_user_positions, { params: { userId: userId } })
      .then((response) => response.data)
      .catch(() => undefined);

    if (!result) return Promise.reject(null);

    let positions: Position[];
    result.forEach((position) => {
      positions.push(new Position(position));
    });

    return Promise.resolve(positions);
  }
}

// const API = axios.create({
//   baseURL: host,
//   headers: {
//     authorization: `Bearer ${datajwt}`,
//     accept: "*/*",
//   },
// });

// export const setJwt = (data) => {
//   let jwt = "";
//   if (typeof data === "string") {
//     jwt = data;
//   } else if (data == null) {
//     jwt = "";
//   }
//   API.defaults.headers["authorization"] = `Bearer ${jwt}`;
// };

export default API;
