import usePageIndex from "Hooks/usePageIndex";
import React, { useEffect, useState } from "react";
import getCabinet from "../Fetch/getCabinet";
import CabinetCard from "../Components/CabinetCard/CabinetCard";
import {notifyError, notifySuccess} from "../../../Components/Notifications/Notifications";
import {typeError} from "../../../Types/types";
import putCabinet from "../Fetch/putCabinet";
import deleteCabinet from "../Fetch/deleteCabinet";
import postCabinet from "../Fetch/postCabinet";

function useAdministrateCabinet(componentRef: React.RefObject<HTMLElement>) {
    const { PageIndex } = usePageIndex(componentRef);
    const [JSXCabinets, setJSXCabinets] = useState<JSX.Element[]>([]);


    const edit = async (cabinetId: string, name: string) => {
        return await putCabinet(cabinetId, name).then(() => Promise.resolve());
    }

    const deleteCabinetJSX = (cabinetId: string) => {
        deleteCabinet(cabinetId).then(() => {
            setJSXCabinets((prevState) =>
                prevState.filter((positionJsx) => positionJsx.key !== cabinetId)
            )
            notifySuccess("Кабинет удален")
        }).catch((error: typeError)  => {
            notifyError(error.discription)
        })
    }
    const newCabinet = (name: string) => {
        if (name.length === 0 ){
            notifyError("Название кабинета пусто");
            return;
        }
        postCabinet(name).then((cabinet) => {
            setJSXCabinets((prevState) => [
                <CabinetCard key={cabinet.id} cabinet={cabinet} edit={edit} deleteCabinet={deleteCabinetJSX} />,
                ...prevState
            ]);
            notifySuccess("Кабинет добавлен");
        })

    }


    useEffect(() => {

        getCabinet({PageIndex}).then((arrCabinet) => {
            const _JSXCabinets = [...JSXCabinets];
            arrCabinet.forEach(cabinet => {
                _JSXCabinets.push(<CabinetCard key={cabinet.id} cabinet={cabinet} edit={edit} deleteCabinet={deleteCabinetJSX} />);
            })
            setJSXCabinets(_JSXCabinets);
        })

    }, [PageIndex]);

    return {JSXCabinets, newCabinet};
}

export default useAdministrateCabinet;