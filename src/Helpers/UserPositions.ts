import Position from "Helpers/Positions";
import MyDate from "Helpers/MyDate";

interface ParamsClassUserPosition{
    id: string;
    position: Position;
    start: MyDate;
    end: MyDate | null;
}

export default class UserPosition {
    public readonly id: string;
    public readonly position: Position;
    public readonly start: MyDate;
    public readonly end: MyDate | null;

    constructor({ id, position, start, end }: ParamsClassUserPosition) {
        this.id = id;
        this.position = position;
        this.start = start;
        this.end = end;
    }

}
