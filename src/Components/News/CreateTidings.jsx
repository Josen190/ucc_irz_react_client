import React, { Component } from "react";
import Checkbox from "../basic/Checkbox";
import Textarea from "../basic/Textarea";
import Button from "../basic/Button";
import './news.css';

 const CreateTidings = ({setActive}) => {

    return (
      <div className='modal' onClick={() => {setActive(false)}}>
        <form className="column tile" onClick={e => e.stopPropagation()}>
          <h3>Создать новость</h3>
          <Textarea rows='15'/>
          <Checkbox title="Глобальная новость" />
          <Button type="button"  onClick={() => {setActive(false)}}>Отмена</Button>
          <Button type="submit">Создать</Button>
        </form>
      </div>
    );
  };

  export default CreateTidings;
