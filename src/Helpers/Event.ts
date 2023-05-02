import PropsEvent from "../Fetch/Interface/IEvent";
import Cabinet from "./Cabinet";
import User from "./User";
import MyDate from "./MyDate";

export default class Event {
  id: string;
  creator: User;
  title: string;
  start: MyDate;
  end: MyDate;
  cabinetName: string| null;
  description?: string;
  isPublic?: boolean;
  listenersIds?: string[];
  


  constructor(props: PropsEvent) {
    this.id = props.id;
    this.creator = new User(props.creator);
    this.title = props.title;
    this.start = new MyDate(props.start);
    this.end = new MyDate(props.end);
    this.cabinetName = props.cabinetName;

    this.description = props.description;
    this.isPublic = props.isPublic;
    this.listenersIds = props.listenersIds;
  }
}
