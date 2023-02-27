import React, { Component } from "react";
import API, { url_me } from "../api/Api";
import Button from "../Components/basic/Button";
import InputField from "../Components/basic/InputField";
import InputImg from "../Components/basic/InputImg";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myself: "",
      iDid: "",
      achievements: "",
      skills: "",
    };
    console.log("1");
  }

  componentDidMount() {
    API.get(url_me).then((response) => {
      console.log(response);
      const data = {};
    });
  }

  render() {
    return (
      <main className="tile col-space-between">
        <form>
          <InputImg />
          <InputField
            type="textarea"
            title="О себе"
            placeholder="Введите информацию о себе"
            value={this.state.myself}
          />
          <InputField
            type="textarea"
            title="Чем занимался"
            placeholder="Введите чем вы занимались"
            value={this.state.iDid}
          />
          <InputField
            type="textarea"
            title="Достижения"
            placeholder="Расскажите о ваших достижениях"
            value={this.state.achievements}
          />
          <InputField
            type="textarea"
            title="Навыки и компетенции"
            placeholder="Расскажите о ваших навыках "
            value={this.state.skills}
          />
          <div>
            <Button type="link" href="/account">
              Отмена
            </Button>
            <Button type="button">Сохранить</Button>
          </div>
        </form>
      </main>
    );
  }
}
