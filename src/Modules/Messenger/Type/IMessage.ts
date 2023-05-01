import PropsImage from "Fetch/Interface/IImage";
import PropsMinUser from "Fetch/Interface/IMinUser";

export interface IFetchParamsMessage{
    id: string;
    text: string;
    image: PropsImage |  null;
    dateTime: string;
    senderId: string;
}