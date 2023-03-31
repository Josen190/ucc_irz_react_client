import MyDate from "./MyDate";
import { MinUser } from "./User";
var NewsComments = /** @class */ (function () {
    function NewsComments(idOrProps, text, dateTime, user) {
        if (typeof idOrProps === "string") {
            this.id = idOrProps;
            this.text = text;
            this.dateTime = dateTime;
            this.user = user;
        }
        else {
            this.id = idOrProps.id;
            this.text = idOrProps.text;
            this.dateTime = new MyDate(idOrProps.dateTime);
            this.user = new MinUser(idOrProps.user);
        }
    }
    return NewsComments;
}());
export default NewsComments;
