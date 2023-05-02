import User from "Helpers/User";
import Message from "./Message";
import { IFetchParamsChat } from "../Type/IChat";

class Chat{
    id: string;
    recipient: User;
    lastMessage: Message;
    unreadedCount: number;

    constructor(params: IFetchParamsChat){
        this.id = params.id;
        this.recipient = new User(params.recipient);
        this.lastMessage = new Message(params.lastMessage);
        this.unreadedCount = params.unreadedCount;
    }
}

export default Chat;