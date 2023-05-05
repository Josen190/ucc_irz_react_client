import Image from "Helpers/Image";
import VisitingUser from "Helpers/VisitingUser"
import MyDate from "Helpers/MyDate"
import { IFetchParamsMessage, IParamsMessage } from "../Type/IMessage";



class Message {
    id: string;
    text: string;
    image: Image | null;
    dateTime: MyDate;
    senderId: string;

    constructor(params: IParamsMessage)
    constructor(params: IFetchParamsMessage)
    constructor(params: IFetchParamsMessage | IParamsMessage) {
        this.id = params.id;
        this.text = params.text;
        this.image = params.imageId ? (typeof params.imageId === 'string' ? new Image({ id: params.imageId }) : params.imageId) : null;
        this.dateTime = new MyDate(params.dateTime);
        this.senderId = params.senderId;
    }
}

export default Message;