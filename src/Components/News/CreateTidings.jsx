import React, { Component } from "react";
import Checkbox from "../basic/Checkbox";
import Textarea from "../basic/Textarea";
import Button from "../basic/Button";
import './news.css';

 const CreateTidings = ({active, setActive}) => {

    let className = active ? 'modal' : 'modal disable'
    return (
      <div className={className} onClick={() => {setActive(false)}}>
        <form className="column tile" onClick={e => e.stopPropagation()}>
          <h3>Создать новость</h3>
          <Textarea rows='15'/>
          <Checkbox title="Глобальная новость" />
          <Button type="button" value="Отмена" onClick={() => {setActive(false)}}/>
          <Button type="submit" value="Создать" />
        </form>
      </div>
    );
  };

  export default CreateTidings;
