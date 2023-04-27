import { useState } from "react";
import { ConstAdmin, ConstCabinetsManager, ConstSuperAdmin, ConstSupport } from "../Constatnts/role";


function useStorageRole(role: string[] = []) {
    const [CabinetsManager, setCabinetsManager] = useState({
        ...ConstCabinetsManager,
        isSelected: role.includes(ConstCabinetsManager.Id),
    })
    const [SuperAdmin, setSuperAdmin] = useState({
        ...ConstSuperAdmin,
        isSelected: role.includes(ConstSuperAdmin.Id)
    })
    const [Support, setSupport] = useState({
        ...ConstSupport,
        isSelected: role.includes(ConstSupport.Id),
    })
    const [Admin, setAdmin] = useState({
        ...ConstAdmin,
        isSelected: role.includes(ConstAdmin.Id),
    })

    const roleUser = {
        CabinetsManager: {
            get: CabinetsManager,
            set: (isSelected: boolean) => { setCabinetsManager({ ...CabinetsManager, isSelected }) },
        },
        SuperAdmin: {
            get: SuperAdmin,
            set: (isSelected: boolean) => { setSuperAdmin({ ...SuperAdmin, isSelected }) },
        },
        Support: {
            get: Support,
            set: (isSelected: boolean) => { setSupport({ ...Support, isSelected }) },
        },
        Admin: {
            get: Admin,
            set: (isSelected: boolean) => { setAdmin({ ...Admin, isSelected }) },
        },
    }

    const currentRoles: string[] = [];
    if (CabinetsManager.isSelected) currentRoles.push(CabinetsManager.Id);
    if (SuperAdmin.isSelected) currentRoles.push(SuperAdmin.Id);
    if (Support.isSelected) currentRoles.push(Support.Id);
    if (Admin.isSelected) currentRoles.push(Admin.Id);

    return { roleUser, currentRoles };
}
export default useStorageRole;