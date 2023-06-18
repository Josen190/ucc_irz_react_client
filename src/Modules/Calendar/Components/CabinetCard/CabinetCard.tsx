import React, {useState} from "react";
import Cabinet from "Helpers/Cabinet";
import { InputText } from "UI/Input";
import useText from "Hooks/useText";
import { Button } from "UI/Button";

interface Props {
    cabinet: Cabinet;
    edit: (cabinetId: string, name: string) => Promise<void>;
    deleteCabinet: (cabinetId: string) => void;
}

function CabinetCard(props: Props) {
    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useText(props.cabinet.name);
    return (
        <tr className="row-cabinet">
            <td>
                {!isEdit && <p>{name}</p>}
                {isEdit && <InputText 
                                defaultValue={name} 
                                onSetValue={setName} 
                                placeholder="Название должности"/> }
            </td>
            <td>
                {!isEdit && <Button type="button" onClick={() => setIsEdit(true)}>Изменить</Button>}
                {isEdit && <Button type="button"
                                   onClick={() => {
                                       if (props.cabinet.name === name) {
                                           setIsEdit(false);
                                           return;
                                       }
                                       if (name)
                                            props.edit(props.cabinet.id, name).then(() => setIsEdit(false));
                                   }} >Сохранить</Button>}
            </td>
            <td>
                <Button type="button" onClick={() => props.deleteCabinet(props.cabinet.id)}>Удалить</Button>
            </td>
        </tr>
    )
}

export default CabinetCard;