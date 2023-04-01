import PropsEvent from "../Fetch/Interface/IEvent";
import Cabinet from "./Cabinet";
import MyDate from "./MyDate";

export default class Event {
  id: string;
  title: string;
  start: MyDate;
  end: MyDate;
  cabinet: Cabinet | null;

  constructor(props: PropsEvent) {
    this.id = props.id;
    this.title = props.title;
    this.start = new MyDate(props.start);
    this.end = new MyDate(props.end);
    this.cabinet = props.cabinetName ? new Cabinet(props.cabinetName) : null;
  }
}
