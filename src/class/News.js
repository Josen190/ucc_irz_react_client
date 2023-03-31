import Image from "./Image";
import MyDate from "./MyDate";
import { MinUser } from "./User";
var News = /** @class */ (function () {
    function News(props) {
        this.id = props.id;
        this.title = props.title;
        this.clippedText = props.text;
        this.image = new Image(props.imageId ? { id: props.imageId } : null);
        this.dateTime = new MyDate(props.dateTime);
        this.isLiked = props.isLiked;
        this.likesCount = props.likesCount;
        this.author = new MinUser(props.author);
        this.isPublic = props.isPublic;
        this.commentCount = props.commentCount;
        this.isClipped = props.isClipped;
    }
    return News;
}());
export default News;
