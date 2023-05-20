import fetch from "Fetch/Fetch";
import {url_post_positions_remove_user_position} from "../../../Constatnts/url";
import MyDate from "Helpers/MyDate";

async function postRemovePosUser(positionId: string, userId: string) {
    return await fetch.post(url_post_positions_remove_user_position, {
        positionId,
        userId,
        end: new MyDate().toISOString(),
    })
}

export default postRemovePosUser;