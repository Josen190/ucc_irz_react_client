import PropsEvent from "../Fetch/Interface/IEvent";
import Cabinet from "./Cabinet";
import VisitingUser from "./VisitingUser";
import MyDate from "./MyDate";

export default class Event {
  id: string;
  creator: VisitingUser;
  title: string;
  start: MyDate;
  end: MyDate;
  cabinetName: string| null;
  description?: string;
  isPublic?: boolean;
  listeners?: VisitingUser[];
  


  constructor(props: PropsEvent) {
    this.id = props.id;
    this.creator = new VisitingUser(props.creator);
    this.title = props.title;
    this.start = new MyDate(props.start);
    this.end = new MyDate(props.end);
    this.cabinetName = props.cabinetName;

    this.description = props.description;
    this.isPublic = props.isPublic;
    this.listeners = props.listeners ? props.listeners.map(p => new VisitingUser(p)) : props.listeners;
  }
}
