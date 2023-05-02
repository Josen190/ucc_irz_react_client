
import MyDate from "Helpers/MyDate";
import { useEffect, useState } from "react";
import getMyEvents from "../Fetch/getMyEvents";
import Event from "Helpers/Event";

function useGetMyEvents(firstDay: MyDate, lastDay: MyDate) {
    const [listEvents, setListEvents] = useState<Event[]>([]);

    useEffect(() => {
        getMyEvents(firstDay, lastDay).then((events) => {
            setListEvents(events);
        });
    }, [firstDay, lastDay]);

    return listEvents;
}

export default useGetMyEvents;