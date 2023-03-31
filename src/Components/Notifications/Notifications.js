import { toast } from "react-toastify";
var toastOptions = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
};
export function notify(text) {
    toast(text, toastOptions);
}
export function notifyInfo(text) {
    toast.info(text, toastOptions);
}
export function notifySuccess(text) {
    toast.success(text, toastOptions);
}
export function notifyWarning(text) {
    toast.warning(text, toastOptions);
}
export function notifyError(text) {
    toast.error(text, toastOptions);
}
