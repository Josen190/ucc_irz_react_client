import { useContext } from "react";
import { authContext } from "./authController";
export function getContext() {
    var context = useContext(authContext);
    var returnContext = {};
    if (typeof context === "object") {
        returnContext = context;
    }
    return returnContext;
}
