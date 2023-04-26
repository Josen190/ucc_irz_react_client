import API from "Fetch/Api";

async function getUsers(pageIndex: number, searchString?: string, isActive?: boolean, role?: string, positionId?: string) 
{
    return await API.getUsers(pageIndex, searchString, isActive, role, positionId).then((users) => Promise.resolve(users))
}
export default getUsers;