import MyDate from "Helpers/MyDate";
import React, { useEffect } from "react";
import { RectReadOnly } from "react-use-measure";



export default function useWidth(
    bounds: RectReadOnly,
    setNameDayWeekFull: React.Dispatch<React.SetStateAction<{
        isFull: boolean;
        nameDay: string[];
    }>>,
    nameDayWeekUse: {
        isFull: boolean;
        nameDay: string[];
    }) {
    useEffect(() => {
        if (nameDayWeekUse.isFull && bounds.width < 1050) {
            setNameDayWeekFull({ isFull: false, nameDay: MyDate.nameDayWeekShort });
        } else if (!nameDayWeekUse.isFull && bounds.width >= 1050) {
            setNameDayWeekFull({ isFull: true, nameDay: MyDate.nameDayWeekFull });
        }

    }, [bounds]);
}
