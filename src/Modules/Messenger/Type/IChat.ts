import PropsMinUser from "Fetch/Interface/IMinUser";
import { IFetchParamsMessage } from "./IMessage";

export interface IFetchParamsChat{
    id: string;
    recipient: PropsMinUser;
    lastMessage: IFetchParamsMessage | null;
    unreadedCount: number;
}