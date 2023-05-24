import VisitingUser from "./VisitingUser";
import MyDate from "./MyDate";
import Cabinet from "Helpers/Cabinet";

export default class Event {
  id: string;
  creator: VisitingUser;
  title: string;
  description?: string;
  start: MyDate;
  end: MyDate;
  cabinet: Cabinet | null;
  isPublic: boolean;
  listeners: VisitingUser[] | null;


  constructor(
      id: string,
      title: string,
      start: MyDate,
      end: MyDate,
      isPublic: boolean,
      creator: VisitingUser,
      cabinet: Cabinet | null,
      listeners: VisitingUser[] | null,
      description?: string,
  ) {
    this.id = id;
    this.creator = creator;
    this.title = title;
    this.start = start;
    this.end = end;
    this.cabinet = cabinet;
    this.description = description;
    this.isPublic = isPublic;
    this.listeners = listeners;
  }
}
