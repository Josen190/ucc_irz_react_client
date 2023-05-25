
import fetch from "Fetch/Fetch";

const url_post_roles_add_to_user = "/api/roles/add_to_user";
const url_post_roles_remove_from_user = "/api/roles/remove_from_user";

async function updateRoles(id: string, oldRole: string[], newRole: string[]) {
    const addRole = newRole.filter((role) => {
        return !oldRole.includes(role);
    })

    const removeRole = oldRole.filter((role) => {
        return !newRole.includes(role);
    })

    const addPromise = addRole.map(role => {
         return  fetch.post(url_post_roles_add_to_user, {
            userId: id, 
            role,
        });
    })

    const removePromise = removeRole.map(role => {
        return fetch.post(url_post_roles_remove_from_user, {
            userId: id, 
            role,
        });
    })

    return await Promise.allSettled([...addPromise, ...removePromise])
}
export default updateRoles;