import VisitingUser from "Helpers/VisitingUser";
import Message from "./Message";
import { IFetchParamsChat } from "../Type/IChat";

class Chat{
    id: string;
    recipient: VisitingUser;
    lastMessage: Message;
    unreadedCount: number;

    constructor(params: IFetchParamsChat){
        this.id = params.id;
        this.recipient = new VisitingUser(params.recipient);
        this.lastMessage = new Message(params.lastMessage);
        this.unreadedCount = params.unreadedCount;
    }
}

export default Chat;