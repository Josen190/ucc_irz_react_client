import { toast, ToastOptions } from "react-toastify";

const toastOptions: ToastOptions = {
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export function notify(text: string) {
  toast(text, toastOptions);
}

export function notifyInfo(text: string) {
  toast.info(text, toastOptions);
}

export function notifySuccess(text: string) {
  toast.success(text, toastOptions);
}

export function notifyWarning(text: string) {
  toast.warning(text, toastOptions);
}

export function notifyError(text: string) {
  toast.error(text, toastOptions);
}
