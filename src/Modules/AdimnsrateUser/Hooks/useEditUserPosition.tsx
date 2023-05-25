import React, {useEffect, useRef, useState} from "react";
import usePageIndex from "../../../Hooks/usePageIndex";
import getPosition from "Fetch/getPosition";
import RowPositionForm from "../Component/RowPositionForm/RowPositionForm";
import User from "Helpers/User";
import postRemovePosUser from "../Fetch/postRemovePosUser";
import postAddPosUser from "../Fetch/postAddPosUser";
import {useNavigate} from "react-router-dom";
import {notifyError, notifySuccess} from "../../../Components/Notifications/Notifications";
import getUserPosition from "Fetch/getUserPosition";


function useEditUserPosition(componentRef: React.RefObject<HTMLElement>, user: User, SearchString?: string) {
    const { PageIndex, restart, onEnd } = usePageIndex(componentRef)
    const navigate = useNavigate();
    const [positionJSX, setPosition] = useState<JSX.Element[]>([]);
    const [userPositionJSX, setUserPosition] = useState<JSX.Element[]>([]);
    const ref = useRef<string>()

    const select = (positionId: string) => {
        alert("Подтвердить")
        postAddPosUser(positionId, user.id).then(() => {
            notifySuccess("Должность изменена");
            navigate("../");
        }).catch(()=>{
            notifyError("Ошибка");
        })
        return;
    }

    const deletPos = (positionId: string) => {
        alert("Подтвердить")
        postRemovePosUser(positionId, user.id).then(() => {
            notifySuccess("Должность изменена");
            navigate("../");
        }).catch(()=>{
            notifyError("Ошибка");
        })
    }

    useEffect(() => {
        getUserPosition(user.id).then((pos) => {
            setUserPosition(pos.filter(p => p.end === null).map(p =>
                (<RowPositionForm key={p.position.id} position={p.position} select={deletPos} title="Удалить"/>)
            ))
        })
    }, [])


    useEffect(() => {
        let positionJsx = positionJSX;
        if (ref.current && ref.current !== SearchString){
            restart()
            positionJsx = [];
        }

        ref.current = SearchString;

        getPosition(PageIndex, SearchString).then((_position) => {
            if (_position.length < 20){
                onEnd();
            }

            const _positionJSX = _position.map((pos) =>
                (<RowPositionForm key={pos.id} position={pos} select={select} title="Выбрать"/>)
            )

            setPosition([...positionJsx, ..._positionJSX]);
        })
    }, [PageIndex])


    return {positionJSX, userPositionJSX};
}

export default useEditUserPosition;


