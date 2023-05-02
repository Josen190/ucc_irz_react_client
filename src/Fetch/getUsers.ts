import { url_get_users } from "Constatnts/url";

import User from "Helpers/User";
import PropsMinUser from "./Interface/IMinUser";
import fetch from "./Fetch";

interface IParams {
    PositionId?: string;
    Role?: string;
    IsActive?: boolean;
    SearchString?: string;
    PageIndex: number;
    PageSize?: number;
}

async function getUsers({ PositionId, Role, IsActive, SearchString, PageIndex, PageSize = 10 }: IParams) {
    const params: { [keys: string]: string | number | boolean } = {
        PageIndex, PageSize,
    }

    if (PositionId) params.PositionId = PositionId;
    if (Role) params.Role = Role;
    if (typeof IsActive !== 'undefined') params.IsActive = IsActive;
    if (SearchString) params.SearchString = SearchString;

    const result = await fetch.get(url_get_users, {params})
        .then((response) => {
            const data = response.data as PropsMinUser[];
            const users = data.map((user) => new User(user))
            return Promise.resolve(users);
        })
        .catch(() => Promise.reject());
    return result;
}
export default getUsers;