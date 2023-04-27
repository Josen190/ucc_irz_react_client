import API from "Fetch/Api";

const url_post_roles_add_to_user = "/api/roles/add_to_user";
const url_post_roles_remove_from_user = "/api/roles/remove_from_user";

function updateRoles(id: string, oldRole: string[], newRole: string[]) {
    const addRole = newRole.filter((role) => {
        return !oldRole.includes(role);
    })

    const removeRole = oldRole.filter((role) => {
        return !newRole.includes(role);
    })

    console.log(addRole);

    addRole.forEach(role => {
        console.log(role);
        API.post(url_post_roles_add_to_user, {
            userId: id, 
            role,
        }).then()
    })

    removeRole.forEach(role => {
        API.post(url_post_roles_remove_from_user, {
            userId: id, 
            role,
        }).then()
    })
    
}
export default updateRoles;