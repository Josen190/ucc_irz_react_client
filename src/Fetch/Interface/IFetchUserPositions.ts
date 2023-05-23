import IFetchPositions from "Fetch/Interface/IFetchPositions";

export default interface IFetchUserPositions{
    id: string;
    position: IFetchPositions;
    start: string;
    end: string;
}