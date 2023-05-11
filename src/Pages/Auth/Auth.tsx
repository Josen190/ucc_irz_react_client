import AuthorizationForm from "Modules/AuthorizationForm";
import React from "react";
import "./Auth.scss";

function Auth(): JSX.Element {
  
  return (
    <div className="login-page">
      <AuthorizationForm></AuthorizationForm>
    </div>
  );
}

export default Auth;
