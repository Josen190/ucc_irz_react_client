import PropsNewsComments from "../Fetch/Interface/INewsComments";
import MyDate from "./MyDate";
import VisitingUser from "./VisitingUser";

export default class NewsComments {
  id: string;
  text?: string;
  dateTime?: MyDate;
  user?: VisitingUser;

  constructor(id: string, text?: string, user?: VisitingUser, dateTime?: MyDate,);
  constructor(props: PropsNewsComments);
  constructor(
    idOrProps: string | PropsNewsComments,
    text?: string, 
    user?: VisitingUser,
    dateTime?: MyDate,
  ) {
    if (typeof idOrProps === "string") {
      this.id = idOrProps;
      this.text = text;
      this.dateTime = dateTime;
      this.user = user;
    } else {
      this.id = idOrProps.id;
      this.text = idOrProps.text;
      this.dateTime = new MyDate(idOrProps.dateTime);
      this.user = new VisitingUser(idOrProps.user);
    }
  }
}
