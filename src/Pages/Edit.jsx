import React, { Component } from "react";
import Button from "../Components/basic/Button";
import { InputField } from "../Components/basic/InputField";
import InputImg from "../Components/basic/InputImg";
import Header from "../Components/Header/Header";
import Menu from "../Components/Menu/Menu";
import User from "./User";

function save() {}

export default class Edit extends Component {
  render() {
    let myself =
      "человек свободных взглядов любящий аниме, мангу и особенно раноюэ раноюэ";
    let iDid = "чем нибудь";
    let achievements = "идеальная посещаемость, прогулка на 30 000 шагов";
    let skillsAndCompetencies =
      "рисование на уровне младшеклашки и игра на флейте";
    return (
      <User>
        <main className="tile col-space-between">
          <div>
            <InputImg />
            <InputField
              type="textarea"
              title="О себе"
              placeholder="Введите информацию о себе"
              value={myself}
            />
            <InputField
              type="textarea"
              title="Чем занимался"
              placeholder="Введите чем вы занимались"
              value={iDid}
            />
            <InputField
              type="textarea"
              title="Достижения"
              placeholder="Расскажите о ваших достижениях"
              value={achievements}
            />
            <InputField
              type="textarea"
              title="Навыки и компетенции"
              placeholder="Расскажите о ваших навыках "
              value={skillsAndCompetencies}
            />
          </div>
          <div>
            <Button type="link" href="/account">
              Отмена
            </Button>
            <Button type="button">Сохранить</Button>
          </div>
        </main>
      </User>
    );
  }
}
