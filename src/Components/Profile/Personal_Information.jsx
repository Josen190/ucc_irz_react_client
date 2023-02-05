import React, { Component } from "react";
import Part_Pers_Info from "./Part_Pers_Info";

export default class Personal_Information extends Component {
  render() {
    let fio = "Захаров Вячеслав Сергеевич";
    let date = "05.06.2001";
    let dateReceptPosition = "15.01.2023";
    let position = "веб-разработчик";
    let myself =
      "человек свободных взглядов любящий аниме, мангу и особенно раноюэ";
    let iDid = "чем нибудь";
    let achievements = "идеальная посещаемость, прогулка на 30 000 шагов";
    let skillsAndCompetencies =
      "рисование на уровне младшеклашки и игра на флейте";

    return (
      <div className="column tile">
        <h2>{fio}</h2>
        <Part_Pers_Info title="дата рождения" value={date} />
        <Part_Pers_Info
          title="дата вступления в должность"
          value={dateReceptPosition}
        />
        <Part_Pers_Info title="должность" value={position} />
        <Part_Pers_Info title="о себе" value={myself} />
        <Part_Pers_Info title="чем занимался" value={iDid} />
        <Part_Pers_Info title="достижения" value={achievements} />
        <Part_Pers_Info
          title="навыки и компетенции"
          value={skillsAndCompetencies}
        />
      </div>
    );
  }
}
