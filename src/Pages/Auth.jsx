import React, { Component } from "react";
import Button from "../Components/basic/Button";
import { InputField } from "../Components/basic/InputField";

export default class Auth extends Component {
  render() {
    return (
      <div className="all-display center">
        <form>
          <InputField type="text" />
          <InputField type="password" />
          <Button type="submit" value="войти" />
        </form>
      </div>
    );
  }
}
