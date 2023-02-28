import React, { Component } from "react";
import API, { url_me, url_update_info } from "../api/Api";
import Button from "../Components/basic/Button";
import InputField from "../Components/basic/InputField";
import InputImg from "../Components/basic/InputImg";
import {
  notifySuccess,
  notifyError,
} from "../Components/Notifications/Notifications";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myself: "",
      iDid: "",
      achievements: "",
      skills: "",
    };
  }

  componentDidMount() {
    API.get(url_me).then((response) => {
      const data = {
        myself: response.data.aboutMyself,
        iDid: response.data.myDoings,
        achievements: response.data.skills,
        skills: response.data.skills,
      };
      this.setState(data);
    });
  }

  render() {
    const save = (event) => {
      event.preventDefault();
      console.log(this.state);

      API.put(url_update_info, {
        aboutMyself: this.state.myself,
        myDoings: this.state.iDid,
        skills: this.state.skills,
      }).then(() => {
          notifySuccess("изменения сохранены");
        }).catch((error) => {
          notifyError("изменения не сохранены");
        });
    };

    return (
      <main className="tile col-space-between">
        <form onClick={(e) => save(e)}>
          <InputImg />
          <InputField
            type="textarea"
            title="О себе"
            placeholder="Введите информацию о себе"
            value={this.state.myself}
            onChange={(event) => {
              let data = this.state;
              data.myself = event.target.value;
              this.setState(data);
            }}
          />
          <InputField
            type="textarea"
            title="Чем занимался"
            placeholder="Введите чем вы занимались"
            value={this.state.iDid}
            onChange={(event) => {
              let data = this.state;
              data.iDid = event.target.value;
              this.setState(data);
            }}
          />
          <InputField
            type="textarea"
            title="Достижения"
            placeholder="Расскажите о ваших достижениях"
            value={this.state.achievements}
            onChange={(event) => {
              let data = this.state;
              data.skills = event.target.value;
              this.setState(data);
            }}
          />
          <InputField
            type="textarea"
            title="Навыки и компетенции"
            placeholder="Расскажите о ваших навыках "
            value={this.state.skills}
            onChange={(event) => {
              let data = this.state;
              data.skills = event.target.value;
              this.setState(data);
            }}
          />
          <div>
            <Button type="submit">Сохранить</Button>
          </div>
        </form>
      </main>
    );
  }
}
