import {useEffect, useRef, useState} from "react";
import React from "react";
import usePageIndex from "Hooks/usePageIndex";
import getPosition from "Fetch/getPosition";
import RowTablePosition from "../Component/RowTablePosition/RowTablePosition";
import putPosition from "../Fetch/putPosition";
import deletePosition from "../Fetch/deletePosition";
import {notifyError, notifySuccess} from "../../../Components/Notifications/Notifications";
import {typeError} from "../../../Types/types";
import postPosition from "../Fetch/postPosition";


function useGetPositions(searchString?: string) {

    const [positionsJSX, setPositionsJSX] = useState<JSX.Element[]>([])
    const {PageIndex, restart, onEnd} = usePageIndex();

    const ref = useRef<string>();

    const edit = async (positionId: string, name: string) => {
        return await putPosition(positionId, name).then(() => Promise.resolve());
    }

    const deletePositionJSX = (positionId: string) => {
      deletePosition(positionId).then(() => {
          setPositionsJSX((prevState) =>
              prevState.filter((positionJsx) => positionJsx.key !== positionId)
          )
          notifySuccess("Должность удалена")
      }).catch((error: typeError)  => {
          notifyError(error.discription)
      })
    }

    const newPosition = (name: string) => {
      postPosition(name).then((position) => {
          setPositionsJSX((prevState) => {
              return [<RowTablePosition
                  key={position.id}
                  position={position}
                  edit={edit}
                  deletePosition={deletePositionJSX}
              />, ...prevState];
          })
          notifySuccess("Должность добавлена");
      })
    }

    useEffect(() => {
        let positionsJsx = positionsJSX;
        if (ref.current && ref.current !== searchString){
            restart();
            positionsJsx = [];
        }

        ref.current = searchString;

        getPosition(PageIndex, searchString).then((positions) => {
            const _positionsJSX = [...positionsJsx];
            if (positions.length < 20){
                onEnd();
            }

            (positions.forEach(position => {
                _positionsJSX.push(<RowTablePosition
                    key={position.id}
                    position={position}
                    edit={edit}
                    deletePosition={deletePositionJSX}
                />);
            }))
            setPositionsJSX(_positionsJSX)
        })
    }, [PageIndex, searchString])

    return {positionsJSX, newPosition};
}
export default useGetPositions;