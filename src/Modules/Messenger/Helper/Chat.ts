import MinUser from "Helpers/MinUser";
import Message from "./Message";
import { IFetchParamsChat } from "../Type/IChat";

class Chat{
    id: string;
    recipient: MinUser;
    lastMessage: Message;
    unreadedCount: number;

    constructor(params: IFetchParamsChat){
        this.id = params.id;
        this.recipient = new MinUser(params.recipient);
        this.lastMessage = new Message(params.lastMessage);
        this.unreadedCount = params.unreadedCount;
    }
}

export default Chat;