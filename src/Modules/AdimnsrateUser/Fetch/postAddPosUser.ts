import fetch from "Fetch/Fetch";
import {url_post_positions_add_pos_to_user} from "../../../Constatnts/url";
import MyDate from "Helpers/MyDate";

async function postAddPosUser(positionId: string, userId: string) {
    return await fetch.post(url_post_positions_add_pos_to_user, {
        positionId,
        userId,
        start: new MyDate().toISOString(),
    })
}

export default postAddPosUser;