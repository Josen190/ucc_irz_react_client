import axios from "axios";

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
export const url_get_cabinets_id_events = (id) => {
  return `/api/cabinets/${id}/events`;
};
export const url_put_cabinets_id = (id) => {
  return `/api/cabinets/${id}`;
};
export const url_delete_cabinets_id = (id) => {
  return `/api/cabinets/${id}`;
};

// чат
export const url_get_chats = "/api/chats";

// События
export const url_get_events_my = "/api/events/my";
export const url_get_events_listenning = "/api/events/listenning";
export const url_get_events_id = (id) => {
  return `/api/events/${id}`;
};
export const url_delete_events_id = (id) => {
  return `/api/events/${id}`;
};
export const url_post_events = "/api/events";

// Изображения
export const url_get_images_id = (id) => {
  return `/api/images/${id}`;
};

// Сообщения
export const url_get_messages = "/api/messages";
export const url_post_messages = "/api/messages";
export const url_delete_messages_id = (id) => {
  return `/api/messages/${id}`;
};

// новости
export const url_get_news = `/api/news`;
export const url_post_news = `/api/news`;
export const url_get_news_id = (id) => {
  return `/api/news/${id}`;
};
export const url_delete_news_id = (id) => {
  return `/api/news/${id}`;
};
export const url_get_news_id_full_text = (id) => {
  return `/api/news/${id}/full_text`;
};

// коментарии к новости
export const url_get_news_comments = "/api/news_comments";
export const url_post_news_comments = "/api/news_comments";
export const url_delete_news_comments_id = (id) => {
  return `/api/news_comments/${id}`;
};

// Лайки к новости
export const url_post_likes_like_news_entry = "/api/likes/like_news_entry";
export const url_post_likes_unlike_news_entry = "/api/likes/unlike_news_entry";

// должности
export const url_get_positions = "/api/positions";
export const url_post_positions = "/api/positions";
export const url_put_positions_id = (id) => {
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
export const url_get_users_id = (id) => {
  return `/api/users/${id}`;
};
export const url_put_users_me_update_photo = "/api/users/me/update_photo";
export const url_put_users_me_delete_photo = "/api/users/me/delete_photo";
export const url_put_users_me_update_info = "/api/users/me/update_info";

// Управление пользователями
export const url_post_users_management_register =
  "/api/users_management/register";
export const url_put_users_management_id_update_reg_info = (id) => {
  return `/api/users_management/${id}/update_reg_info`;
};
export const url_delete_users_management_id = (id) => {
  return `/api/users_management/${id}`;
};
export const url_put_users_management_id_activate = (id) => {
  return `/api/users_management/${id}/activate`;
};
export const url_put_users_management_id_deactivate = (id) => {
  return `/api/users_management/${id}/deactivate`;
};

let datajwt = "";
let data = window.localStorage.getItem("jwt");
if (typeof data === "string") {
  datajwt = data;
} else if (data == null) {
  datajwt = "";
}

const API = axios.create({
  baseURL: host,
  headers: {
    authorization: `Bearer ${datajwt}`,
    accept: "*/*",
  },
});

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
