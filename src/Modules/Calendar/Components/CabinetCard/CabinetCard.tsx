import React, {useState} from "react";
import Cabinet from "Helpers/Cabinet";
import InputField from "UI/InputField/InputField";
import Button from "UI/Button/Button";

interface Props {
    cabinet: Cabinet;
    edit: (cabinetId: string, name: string) => Promise<void>;
    deleteCabinet: (cabinetId: string) => void;
}

function CabinetCard(props: Props) {
    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState<string>(props.cabinet.name);
    return (
        <tr className="row-cabinet">
            <td>
                {!isEdit && <p>{name}</p>}
                {isEdit && <InputField type="text" defaultValue={name} onSetValue={setName} placeholder="Название должности"/> }
            </td>
            <td>
                {!isEdit && <Button type="button" onClick={() => setIsEdit(true)}>Изменить</Button>}
                {isEdit && <Button type="button"
                                   onClick={() => {
                                       if (props.cabinet.name === name) {
                                           setIsEdit(false);
                                           return;
                                       }
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