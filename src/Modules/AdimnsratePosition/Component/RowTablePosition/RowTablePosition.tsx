import React, {useState} from "react";
import Position from "Helpers/Positions";
import { Button } from "UI/Button";
import { InputText } from "UI/Input";
import useText from "Hooks/useText";


interface Props {
    position: Position;
    edit: (positionId: string, name: string) => Promise<void>;
    deletePosition: (positionId: string) => void;
}


function RowTablePosition({ position, edit, deletePosition }: Props) {
    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useText(position.name);


    return (
        <tr className="row-position">
            <td>
                {!isEdit && <p>{name}</p>}
                {isEdit && <InputText defaultValue={name} onSetValue={setName} placeholder="Название должности"/> }
            </td>
            <td>
                {!isEdit && <Button type="button" onClick={() => setIsEdit(true)}>Изменить</Button>}
                {isEdit && <Button type="button"
                                   onClick={() => {
                                       if (position.name === name) {
                                           setIsEdit(false);
                                           return;
                                       }
                                       if (name)
                                        edit(position.id, name).then(() => setIsEdit(false));
                                   }} >Сохранить</Button>}
            </td>
            <td>
                <Button type="button" onClick={() => deletePosition(position.id)}>Удалить</Button>
            </td>
        </tr>
    );
}

export default RowTablePosition;
