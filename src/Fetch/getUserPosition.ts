import fetch from "Fetch/Fetch";
import {url_get_user_positions} from "../Constatnts/url";
import IFetchUserPositions from "Fetch/Interface/IFetchUserPositions";
import UserPosition from "Helpers/UserPositions";
import Position from "Helpers/Positions";
import MyDate from "Helpers/MyDate";


async function getUserPosition(userId: string) {
    return await fetch.get(url_get_user_positions, {params: {
            userId
        }}).then((response) => {
            const data = response.data as IFetchUserPositions[];
            return data.map((userPosition) => new UserPosition({
                id: userPosition.id,
                position: new Position(userPosition.position),
                start: new MyDate(userPosition.start),
                end: userPosition.end ? new MyDate(userPosition.end) : null,
            }))

    })
}

export default getUserPosition;