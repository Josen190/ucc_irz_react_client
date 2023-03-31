import Image from "./Image";
import MyDate from "./MyDate";
import { MinUser, PropsMinUser } from "./User";

interface PropsNews {
    id: string;
    title: string;
    text: string;
    imageId: string | null;
    dateTime: string;
    isLiked: boolean;
    likesCount: number;
    author: PropsMinUser;
    isPublic: boolean;
    commentCount: number;
    isClipped: boolean;
}

export default class News {
    id: string;
    title: string;
    clippedText: string;
    fullText: string;
    image: Image;
    dateTime: MyDate;
    isLiked: boolean;
    likesCount: number;
    author: MinUser;
    isPublic: boolean;
    commentCount: number;
    isClipped: boolean;

    constructor(props: PropsNews){
        this.id = props.id;
        this.title = props.title;
        this.clippedText = props.text;
        this.image = new Image(props.imageId ? {id: props.imageId }: null);
        this.dateTime = new MyDate(props.dateTime);
        this.isLiked = props.isLiked;
        this.likesCount = props.likesCount;
        this.author = new MinUser(props.author);
        this.isPublic = props.isPublic;
        this.commentCount = props.commentCount;
        this.isClipped = props.isClipped;
    }
}