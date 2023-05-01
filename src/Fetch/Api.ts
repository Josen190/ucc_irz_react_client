import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
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
import { url_post_refresh, 
  url_get_users, 
  url_put_users_me_update_info, 
  url_put_change_password, 
  url_get_news_comments, 
  url_get_events_my, 
  url_get_news_id_full_text, 
  url_delete_news_comments_id, 
  url_post_news_comments, 
  url_post_news, 
  url_get_news, 
  url_post_likes_like_news_entry, 
  url_post_likes_unlike_news_entry, 
  url_delete_news_id, 
  url_post_subscriptions_unsubscribe, 
  url_post_subscriptions_subcribe, 
  url_get_user_positions, 
  url_put_users_me_update_photo, 
  url_get_events_id, 
  url_delete_events_id, 
  url_post_events } from "Constatnts/url";

const host = "https://localhost:7116";





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
    this.feth.post
  }

  public static get<T = any, R = AxiosResponse<T, any>, D = any>
    (url: string, config?: AxiosRequestConfig<D> | undefined) {
    return this.feth.get(url, config);
  }

  public static post<T = any, R = AxiosResponse<T, any>, D = any>
    (url: string, data?: D | undefined, config?: AxiosRequestConfig<D> | undefined) {
    return this.feth.post(url, data, config);
  }

  public static delete<T = any, R = AxiosResponse<T, any>, D = any>
    (url: string, config?: AxiosRequestConfig<D> | undefined) {
    return this.feth.delete(url, config);
  }

  public static put<T = any, R = AxiosResponse<T, any>, D = any>
    (url: string, data?: D | undefined, config?: AxiosRequestConfig<D> | undefined) {
    return this.feth.put(url, data, config);
  }

  public static setRefreshToken(refreshToken: string | null) {
    this.refreshToken = refreshToken;
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

  public static async putUpdateInfo(
    myself?: string,
    iDid?: string,
    achievements?: string,
    skills?: string,
  ) {

    const data: { [key: string]: string } = {}
    if (myself) data.aboutMyself = myself;
    if (iDid) data.myDoings = iDid;
    if (skills) data.skills = skills;


    this.feth
      .put(url_put_users_me_update_info, data)
      .then(() => {
        Promise.resolve();
      })
      .catch((error) => {
        Promise.reject(error);
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
        params: {
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

    if (typeof filter?.AuthorId !== 'undefined') params.AuthorId = filter.AuthorId;
    if (typeof filter?.PublicOnly !== 'undefined') params.PublicOnly = filter.PublicOnly;
    if (typeof filter?.LikedOnly !== 'undefined') params.LikedOnly = filter.LikedOnly;
    if (typeof filter?.SearchString !== 'undefined') params.SearchString = filter.SearchString;

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

  public static async getUserPositions(
    userId: string
  ): Promise<Position[]> {
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

  public static async putUpdetePhoto(
    name: string, extension: string, data: string
  ) {
    const result = await this.feth
      .put(url_put_users_me_update_photo, {
        name: name,
        extension: extension,
        data: data
      })
      .then((response) => Promise.resolve(response.data as string))
      .catch(() => Promise.reject(null));

    return result;
  }

  public static async getEventId(id: string) {
    const result = await this.feth
      .get(url_get_events_id(id), {
        params: {
          id: id
        }
      })
      .then((response) => Promise.resolve(new Event(response.data)))
      .catch(() => Promise.reject(null));

    return result;
  }

  public static async deleteEventId(id: string) {
    const result = await this.feth
      .delete(url_delete_events_id(id), {
        params: {
          id: id
        }
      })
      .then(() => Promise.resolve(null))
      .catch(() => Promise.reject(null));

    return result;
  }

  public static async postEvent(data: {
    title: string;
    description: string;
    start: MyDate | null;
    end: MyDate | null;
    isPublic: boolean;
    cabinetId: string | null;
    listenersIds: string[] | null;
  }) {
    const result = await this.feth
      .post(url_post_events, data)
      .then((response) => Promise.resolve(response.data as string))
      .catch(() => Promise.reject(null));

    return result;
  }
}

export default API;