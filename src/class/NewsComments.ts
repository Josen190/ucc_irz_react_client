import MyDate from "./MyDate";
import { MinUser, PropsMinUser } from "./User";

interface PropsNewsComments {
    id: string;
    text: string;
    dateTime: string;
    user: PropsMinUser;
}

export default class NewsComments {
    id: string;
    text?: string;
    dateTime?: MyDate;
    user?: MinUser;

    constructor(id: string, text?: string, dateTime?: MyDate, user?: MinUser);
    constructor(props: PropsNewsComments);
    constructor(
        idOrProps: string | PropsNewsComments,
        text?: string, dateTime?: MyDate, user?: MinUser
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
            this.user = new MinUser(idOrProps.user);
        }
    }
}