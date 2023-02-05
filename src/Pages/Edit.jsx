import React, { Component } from "react";
import Button from "../Components/basic/Button";
import InputField from "../Components/basic/InputField";
import InputImg from "../Components/basic/InputImg";

function save() {}

export default class Edit extends Component {
  render() {
    let myself =
      "человек свободных взглядов любящий аниме, мангу и особенно раноюэ";
    let iDid = "чем нибудь";
    let achievements = "идеальная посещаемость, прогулка на 30 000 шагов";
    let skillsAndCompetencies =
      "рисование на уровне младшеклашки и игра на флейте";
    return (
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
          <Button type="link" value="Отмена" href="/account" />
          <Button type="button" value="Сохранить" />
        </div>
      </main>
    );
  }
}
