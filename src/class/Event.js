import MyDate from "./MyDate";
var Event = /** @class */ (function () {
    function Event(props) {
        this.id = props.id;
        this.title = props.title;
        this.start = new MyDate(props.start);
        this.end = new MyDate(props.end);
        this.cabinet = props.cabinetName ? new Cabinet(props.cabinetName) : null;
    }
    return Event;
}());
export default Event;
