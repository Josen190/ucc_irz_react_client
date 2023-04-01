import axios from "axios";
import PropsUser from "./Interface/IUser";
import User from "../Helpers/User";

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
export const url_post_likes_unlike_news_entry = "/Fetch/likes/unlike_news_entry";

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
  private static jwt: string | null = window.localStorage.getItem("jwt");
  private static host = "https://localhost:7116";
  private static feth = axios.create({
    baseURL: API.host,
    headers: {
      authorization: API.jwt === "null" || API.jwt === "undifined"? `Bearer ${datajwt}` : null,
      accept: "*/*",
    },
  });

  public static async getUser(id: string): Promise<User | null> {
    const info_user: PropsUser | undefined = await API.feth.get(url_get_users_id(id))
      .then((response) => response.data)
      .catch(() => undefined);

    if (!info_user) {
      return Promise.reject(null);
    }

    return Promise.resolve(new User(info_user));
  }

  public static setJwt(jwt: string | null): void {
    if (jwt) {
      API.feth.defaults.headers["authorization"] = `Bearer ${jwt}`;
    } else {
      API.feth.defaults.headers["authorization"] = null;
    }
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
