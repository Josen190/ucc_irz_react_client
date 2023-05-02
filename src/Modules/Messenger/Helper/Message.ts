import Image from "Helpers/Image";
import User from "Helpers/User"
import MyDate from "Helpers/MyDate"
import { IFetchParamsMessage } from "../Type/IMessage";



class Message{
    id: string;
    text: string;
    image: Image |  null;
    dateTime: MyDate;
    senderId: string;

    constructor(params: IFetchParamsMessage){
        this.id = params.id;
        this.text = params.text;
        this.image = params.image ? new Image(params.image) : null;
        this.dateTime = new MyDate(params.dateTime);
        this.senderId = params.senderId;
    }
}

export default Message;