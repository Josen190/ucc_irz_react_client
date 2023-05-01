import PropsEvent from "../Fetch/Interface/IEvent";
import Cabinet from "./Cabinet";
import MinUser from "./MinUser";
import MyDate from "./MyDate";

export default class Event {
  id: string;
  creator: MinUser;
  title: string;
  start: MyDate;
  end: MyDate;
  cabinetName: string| null;
  description?: string;
  isPublic?: boolean;
  listenersIds?: string[];
  


  constructor(props: PropsEvent) {
    this.id = props.id;
    this.creator = new MinUser(props.creator);
    this.title = props.title;
    this.start = new MyDate(props.start);
    this.end = new MyDate(props.end);
    this.cabinetName = props.cabinetName;

    this.description = props.description;
    this.isPublic = props.isPublic;
    this.listenersIds = props.listenersIds;
  }
}
