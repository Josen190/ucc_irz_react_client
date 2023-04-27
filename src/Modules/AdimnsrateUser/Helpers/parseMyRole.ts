import { ConstAdmin, ConstCabinetsManager, ConstSuperAdmin, ConstSupport } from "../Constatnts/role";


function parseMyRole(role: string[]) {
    const currentRolesArr: string[] = [];
    if (role.includes(ConstCabinetsManager.Id)) currentRolesArr.push(ConstCabinetsManager.name);
    if (role.includes(ConstSupport.Id)) currentRolesArr.push(ConstSupport.name);
    if (role.includes(ConstAdmin.Id)) currentRolesArr.push(ConstAdmin.name);
    if (role.includes(ConstSuperAdmin.Id)) currentRolesArr.push(ConstSuperAdmin.name);

    return currentRolesArr.join(", ");
} 
export default parseMyRole;