
const host = 'https://localhost:7116'
//авторизация

//возвращяет: jwt(string), refreshToken(string)
export const authenticate = `${host}/api/authentication/authenticate`;
export const refresh = `${host}/api/authentication/refresh`;
export const change_password = `${host}/api/authentication/change_password`;
export const send_reset_password_url = `${host}/api/authentication/send_reset_password_url`;
export const reset_password = `${host}/api/authentication/reset_password`;
