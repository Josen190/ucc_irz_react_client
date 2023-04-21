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
import { INewsFiler } from "Modules/News";

const host = "https://localhost:7116";

// авторизация
const url_post_authenticate = `/api/authentication/authenticate`;
const url_post_refresh = `/api/authentication/refresh`;
const url_put_change_password = `/api/authentication/change_password`;
const url_post_send_reset_password_url = `/api/authentication/send_reset_password_url`;
const url_get_reset_password = `/api/authentication/reset_password`;

// кабинеты
const url_get_cabinets = "/api/cabinets";
const url_post_cabinets = "/api/cabinets";
const url_get_cabinets_id_events = (id: string) => {
  return `/api/cabinets/${id}/events`;
};
const url_put_cabinets_id = (id: string) => {
  return `/api/cabinets/${id}`;
};
const url_delete_cabinets_id = (id: string) => {
  return `/api/cabinets/${id}`;
};

// чат
const url_get_chats = "/api/chats";

// События
const url_get_events_my = "/api/events/my";
const url_get_events_listenning = "/api/events/listenning";
const url_get_events_id = (id: string) => {
  return `/api/events/${id}`;
};
const url_delete_events_id = (id: string) => {
  return `/api/events/${id}`;
};
const url_post_events = "/api/events";

// Изображения
const url_get_images_id = (id: string) => {
  return `/api/images/${id}`;
};

// Сообщения
const url_get_messages = "/api/messages";
const url_post_messages = "/api/messages";
const url_delete_messages_id = (id: string) => {
  return `/api/messages/${id}`;
};

// новости
const url_get_news = `/api/news`;
const url_post_news = `/api/news`;
const url_get_news_id = (id: string) => {
  return `/api/news/${id}`;
};
const url_delete_news_id = (id: string) => {
  return `/api/news/${id}`;
};
const url_get_news_id_full_text = (id: string) => {
  return `/api/news/${id}/full_text`;
};

// коментарии к новости
const url_get_news_comments = "/api/news_comments";
const url_post_news_comments = "/api/news_comments";
const url_delete_news_comments_id = (id: string) => {
  return `/api/news_comments/${id}`;
};

// Лайки к новости
const url_post_likes_like_news_entry = "/api/likes/like_news_entry";
const url_post_likes_unlike_news_entry =
  "/api/likes/unlike_news_entry";

// должности
const url_get_positions = "/api/positions";
const url_post_positions = "/api/positions";
const url_put_positions_id = (id: string) => {
  return `/api/positions${id}`;
};
const url_post_positions_add_pos_to_user =
  "/api/positions/add_pos_to_user";
const url_post_positions_remove_user_position =
  "/api/positions/remove_user_position";

// Роли
const url_get_roles = "/api/roles";
const url_post_roles_add_to_user = "/api/roles/add_to_user";
const url_post_roles_remove_from_user = "/api/roles/remove_from_user";

// Подписки
const url_get_subscriptions_user_subscribers =
  "/api/subscriptions/user_subscribers";
const url_get_subscriptions_my_subscribers =
  "/api/subscriptions/my_subscribers";
const url_get_subscriptions_user_subscriptions =
  "/api/subscriptions/user_subscriptions";
const url_get_subscriptions_my_subscriptions =
  "/api/subscriptions/my_subscriptions";
const url_post_subscriptions_subcribe = "/api/subscriptions/subcribe";
const url_post_subscriptions_unsubscribe =
  "/api/subscriptions/unsubscribe";

// должности пользователя
const url_get_user_positions = "/api/user_positions";
const url_get_user_positions_my = "/api/user_positions/my";

// пользователь
const url_get_users = `/api/users`;
const url_get_users_me = `/api/users/me`;
const url_get_users_id = (id: string) => {
  return `/api/users/${id}`;
};
const url_put_users_me_update_photo = "/api/users/me/update_photo";
const url_put_users_me_delete_photo = "/api/users/me/delete_photo";
const url_put_users_me_update_info = "/api/users/me/update_info";

// Управление пользователями
const url_post_users_management_register =
  "/api/users_management/register";
const url_put_users_management_id_update_reg_info = (id: string) => {
  return `/api/users_management/${id}/update_reg_info`;
};
const url_delete_users_management_id = (id: string) => {
  return `/api/users_management/${id}`;
};
const url_put_users_management_id_activate = (id: string) => {
  return `/api/users_management/${id}/activate`;
};
const url_put_users_management_id_deactivate = (id: string) => {
  return `/api/users_management/${id}/deactivate`;
};


class API {
  private static loading = false;
  private static jwt: string | null;
  private static refreshToken: string | null;

  private static host = "https://localhost:7116";
  private static feth = axios.create({
    baseURL: API.host,
    headers: {
      accept: "*/*",
    },
  });

  public static setJwt(jwt: string | null): void {
    API.jwt = jwt;
    if (jwt) {
      API.feth.defaults.headers["authorization"] = `Bearer ${jwt}`;
    } else {
      API.feth.defaults.headers["authorization"] = null;
    }
    
  }

  public static setRefreshToken(refreshToken: string | null) {
    this.refreshToken = refreshToken;
  }

  public static async authentication(email: string, password: string): Promise<{ jwt: string, refreshToken: string, user: User }> {
    const result: { jwt: string, refreshToken: string, user: User } | undefined = await this.feth
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
        const _data: { jwt: string, refreshToken: string, user: User | null } = {
          jwt: response.data.jwt,
          refreshToken: response.data.refreshToken,
          user: null,
        };

        this.setJwt(_data.jwt);

        _data.user = await this.getUserMe()
          .then((user) => user)
          .catch(() => null);

        if (_data.user === null)
          return undefined;

        return { ..._data, user: _data.user };
      })
      .catch((error) => undefined);

    if (!result) return Promise.reject();

    return Promise.resolve(result);
  }

  public static async refresh(
    jwt: string | null,
    refreshToken: string | null,
  ) {
    const result: { jwt: string, refreshToken: string } | undefined = await this.feth.post(url_post_refresh,
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
    ).then((response) => response.data).catch(() => undefined)

    if (!result)
      return Promise.reject(null);

    return Promise.resolve(result);
  }

  public static async sendRefreshToken(collbac: (jwt: string | null, refreshToken: string | null) => void) {

    this.feth.interceptors.response.use(
      (response) => response,
      async (error) => {
        const status = error.response ? error.response.status : null;

        if (!this.loading && status === 401) {
          this.loading = true;
          return this.refresh(API.jwt, API.refreshToken).then((data) => {
            collbac(data.jwt, data.refreshToken)
            error.config.headers["Authorization"] =
              "Bearer " + data.jwt;
            error.config.baseURL = host;
            this.loading = false;
            return this.feth.request(error.config);
          })
            .catch(() => {
              collbac(null, null);
              this.loading = true;
            });
        }

        return Promise.reject(error);
      }
    );
  }

  public static async getUser(id: string): Promise<User> {
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

  public static async getUserMe(): Promise<User> {
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

  public static async getNewsComment(newsId: string): Promise<NewsComments[]> {
    const result: PropsNewsComments[] | undefined = await this.feth
      .get(url_get_news_comments, {
        params:{
          newsEntryId: newsId
        }
        
      })
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

    const events: Event[] = [];
    result.forEach((_event) => {
      events.push(new Event(_event));
    });

    return Promise.resolve(events);
  }

  public static async getFullTextOfNews(id: string): Promise<string> {
    const result = await this.feth
      .get(url_get_news_id_full_text(id))
      .then((response) => Promise.resolve(response.data))
      .catch(() => Promise.reject(null));

    return result;
  }

  public static async deletComment(id: string) {
    this.feth
      .delete(url_delete_news_comments_id(id))
      .then(() => Promise.resolve())
      .catch(() => Promise.reject());
  }

  public static async postComment(newsID: string, text: string) {
    const result = await this.feth
      .post(url_post_news_comments, {
        newsEntryId: newsID,
        text: text,
      })
      .then((response) => Promise.resolve(response.data as string))
      .catch(() => Promise.reject(null));

    return result;
  }

  public static async postNews(
    title: string,
    content: string,
    isPublic: boolean,
    image?: Image
  ): Promise<string> {
    const data = {
      title: title,
      text: content,
      isPublic: isPublic,
      image: image ? image.toFetch() : null,
    };
    const result = await this.feth
      .post(url_post_news, data)
      .then((response) => Promise.resolve(response.data as string))
      .catch(() => Promise.reject(null));

      return result;
  }

  public static async getListingNews(
    pageIndex: number,
    filter?: INewsFiler,
    pageSize = 10
  ): Promise<News[]> {
    const params: { [key: string]: string | number | boolean } = {
      PageIndex: pageIndex,
      PageSize: pageSize,
    };
    
    if (filter?.AuthorId) params.AuthorId = filter.AuthorId;
    if (filter?.PublicOnly) params.PublicOnly = filter.PublicOnly;
    if (filter?.LikedOnly) params.LikedOnly = filter.LikedOnly;
    if (filter?.SearchString) params.SearchString = filter.SearchString;

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

    const positions: Position[] = [];
    result.forEach((position) => {
      positions.push(new Position(position));
    });

    return Promise.resolve(positions);
  }
}

export default API;