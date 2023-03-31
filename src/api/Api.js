import axios from "axios";
export var host = "https://localhost:7116";
// авторизация
export var url_post_authenticate = "/api/authentication/authenticate";
export var url_post_refresh = "/api/authentication/refresh";
export var url_put_change_password = "/api/authentication/change_password";
export var url_post_send_reset_password_url = "/api/authentication/send_reset_password_url";
export var url_get_reset_password = "/api/authentication/reset_password";
// кабинеты
export var url_get_cabinets = "/api/cabinets";
export var url_post_cabinets = "/api/cabinets";
export var url_get_cabinets_id_events = function (id) {
    return "/api/cabinets/".concat(id, "/events");
};
export var url_put_cabinets_id = function (id) {
    return "/api/cabinets/".concat(id);
};
export var url_delete_cabinets_id = function (id) {
    return "/api/cabinets/".concat(id);
};
// чат
export var url_get_chats = "/api/chats";
// События
export var url_get_events_my = "/api/events/my";
export var url_get_events_listenning = "/api/events/listenning";
export var url_get_events_id = function (id) {
    return "/api/events/".concat(id);
};
export var url_delete_events_id = function (id) {
    return "/api/events/".concat(id);
};
export var url_post_events = "/api/events";
// Изображения
export var url_get_images_id = function (id) {
    return "/api/images/".concat(id);
};
// Сообщения
export var url_get_messages = "/api/messages";
export var url_post_messages = "/api/messages";
export var url_delete_messages_id = function (id) {
    return "/api/messages/".concat(id);
};
// новости
export var url_get_news = "/api/news";
export var url_post_news = "/api/news";
export var url_get_news_id = function (id) {
    return "/api/news/".concat(id);
};
export var url_delete_news_id = function (id) {
    return "/api/news/".concat(id);
};
export var url_get_news_id_full_text = function (id) {
    return "/api/news/".concat(id, "/full_text");
};
// коментарии к новости
export var url_get_news_comments = "/api/news_comments";
export var url_post_news_comments = "/api/news_comments";
export var url_delete_news_comments_id = function (id) {
    return "/api/news_comments/".concat(id);
};
// Лайки к новости
export var url_post_likes_like_news_entry = "/api/likes/like_news_entry";
export var url_post_likes_unlike_news_entry = "/api/likes/unlike_news_entry";
// должности
export var url_get_positions = "/api/positions";
export var url_post_positions = "/api/positions";
export var url_put_positions_id = function (id) {
    return "/api/positions".concat(id);
};
export var url_post_positions_add_pos_to_user = "/api/positions/add_pos_to_user";
export var url_post_positions_remove_user_position = "/api/positions/remove_user_position";
// Роли
export var url_get_roles = "/api/roles";
export var url_post_roles_add_to_user = "/api/roles/add_to_user";
export var url_post_roles_remove_from_user = "/api/roles/remove_from_user";
// Подписки
export var url_get_subscriptions_user_subscribers = "/api/subscriptions/user_subscribers";
export var url_get_subscriptions_my_subscribers = "/api/subscriptions/my_subscribers";
export var url_get_subscriptions_user_subscriptions = "/api/subscriptions/user_subscriptions";
export var url_get_subscriptions_my_subscriptions = "/api/subscriptions/my_subscriptions";
export var url_post_subscriptions_subcribe = "/api/subscriptions/subcribe";
export var url_post_subscriptions_unsubscribe = "/api/subscriptions/unsubscribe";
// должности пользователя
export var url_get_user_positions = "/api/user_positions";
export var url_get_user_positions_my = "/api/user_positions/my";
// пользователь
export var url_get_users = "/api/users";
export var url_get_users_me = "/api/users/me";
export var url_get_users_id = function (id) {
    return "/api/users/".concat(id);
};
export var url_put_users_me_update_photo = "/api/users/me/update_photo";
export var url_put_users_me_delete_photo = "/api/users/me/delete_photo";
export var url_put_users_me_update_info = "/api/users/me/update_info";
// Управление пользователями
export var url_post_users_management_register = "/api/users_management/register";
export var url_put_users_management_id_update_reg_info = function (id) {
    return "/api/users_management/".concat(id, "/update_reg_info");
};
export var url_delete_users_management_id = function (id) {
    return "/api/users_management/".concat(id);
};
export var url_put_users_management_id_activate = function (id) {
    return "/api/users_management/".concat(id, "/activate");
};
export var url_put_users_management_id_deactivate = function (id) {
    return "/api/users_management/".concat(id, "/deactivate");
};
var datajwt = "";
var data = window.localStorage.getItem("jwt");
if (typeof data === "string") {
    datajwt = data;
}
else if (data == null) {
    datajwt = "";
}
var API = axios.create({
    baseURL: host,
    headers: {
        authorization: "Bearer ".concat(datajwt),
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
