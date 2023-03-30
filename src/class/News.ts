import Image from "./Image";
import MyDate from "./MyDate";

interface PropsNews {
    id: string;
    title: string;
    text: string;
    imageId: string | null;
    dateTime: string;
    isLiked: boolean;
    likesCount: number;
    author: {
        id: string;
        firstName: string;
        surname: string;
        patronymic: string | null;
        imageId: string | null;
    };
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
    author: {
        id: string;
        firstName: string;
        surname: string;
        patronymic: string | null;
        image: Image;
    };
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
        this.author = {
            id: props.author.id,
            firstName: props.author.firstName,
            surname: props.author.surname,
            patronymic: props.author.patronymic,
            image: new Image(props.author.imageId ? {id: props.author.imageId }: null)
        };
        this.isPublic = props.isPublic;
        this.commentCount = props.commentCount;
        this.isClipped = props.isClipped;
    }
}