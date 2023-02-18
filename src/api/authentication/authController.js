import { authenticate } from "../Api";
import axios from "axios";
import User from "../../Pages/User";

function log(m) {
  console.log(m);
}

export function setJwt (data) {
  window.localStorage.setItem("jwt", data);
};

export function setTocen (data) {
  window.localStorage.setItem("jwt", data);
  //???????????????????????????????????????
};

export function getJwt(){
  return window.localStorage.getItem("jwt");
}

export function login(e) {
  e.preventDefault();
  let email = e.target[0].value;
  let password = e.target[1].value;
  e.target[2].disabled = true;

  axios
    .post(authenticate, {
      email: email,
      password: password,
    })
    .then(function (response) {
      console.log(response);
      setJwt(response.data.jwt);

      e.target[3].disabled = false;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function checLogin() {
  return getJwt().length != null;
}

const AuthController = () => {
  if (checLogin()) {
    return redirect("/news");
  }
  return checLogin() ? <User><Outlet /></User> : <Visitor />;
};
export default AuthController;
