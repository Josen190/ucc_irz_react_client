import VisitingUser from "Helpers/VisitingUser";
import Message from "./Message";
import { IFetchParamsChat } from "../Type/IChat";

class Chat{
    id: string;
    recipient: VisitingUser;
    lastMessage: Message | null;
    unreadedCount: number;

    constructor(params: IFetchParamsChat){
        this.id = params.id;
        this.recipient = new VisitingUser(params.recipient);
        this.lastMessage = params.lastMessage ? new Message(params.lastMessage) : null;
        this.unreadedCount = params.unreadedCount;
    }
}

export default Chat;