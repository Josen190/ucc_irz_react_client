import Image from "Helpers/Image";

export interface IFetchParamsMessage{
    id: string;
    text: string;
    imageId: string |  null;
    dateTime: string;
    senderId: string;
}

export interface IParamsMessage{
    id: string;
    text: string;
    imageId: Image |  null;
    dateTime: string;
    senderId: string;
}