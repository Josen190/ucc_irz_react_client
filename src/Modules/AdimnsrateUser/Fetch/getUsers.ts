import { url_get_users } from "Constatnts/url";
import fetch from "Fetch/Fetch";
import PropsUser from "Fetch/Interface/IUser";
import User from "Helpers/User";

async function getUsers(
    pageIndex: number,
    searchString?: string,
    isActive?: boolean,
    role?: string,
    positionId?: string,
    pageSize = 10) {

    const params: { [key: string]: string | number | boolean } = {
        PageIndex: pageIndex,
        PageSize: pageSize,
    };
    if (searchString) params.SearchString = searchString;
    if (isActive) params.IsActive = isActive;
    if (role) params.Role = role;
    if (positionId) params.PositionId = positionId;

    return await fetch
        .get(url_get_users, { params })
        .then((response) => {
            const data = response.data as PropsUser[];
            return Promise.resolve(data.map(paramUser => new User(paramUser)))
        }).catch((error) => Promise.reject(error.response.data));
}
export default getUsers;