import PropsNews from "../Fetch/Interface/INews";
import Image from "./Image";
import MinUser from "./MinUser";
import MyDate from "./MyDate";

export default class News {
  id: string;
  title: string;
  clippedText: string;
  fullText: string | undefined;
  image: Image | null;
  dateTime: MyDate;
  isLiked: boolean;
  likesCount: number;
  author: MinUser;
  isPublic: boolean;
  commentCount: number;
  isClipped: boolean;

  constructor(id: string, title: string, fullText: string, isPublic: boolean, author: MinUser, image?: Image)
  constructor(props: PropsNews) 
  constructor(idOrProps: string | PropsNews, title?: string, fullText?: string, isPublic?: boolean, author?: MinUser, image?: Image)
  {
    const sizeClippedText = 256;
    if (typeof idOrProps === 'string'){

      this.id = idOrProps;
      this.title = title ?? "";
      this.clippedText = fullText ? fullText : "";
      this.fullText = fullText ?? "";
      this.image = image ?? null;
      this.dateTime = new MyDate();
      this.isLiked = false;
      this.likesCount = 0;
      this.author = author ?? new MinUser();
      this.isPublic = isPublic ?? false;
      this.commentCount = 0;
      this.isClipped = fullText && fullText.length > sizeClippedText? true : false; 

    } else{
      this.id = idOrProps.id;
      this.title = idOrProps.title;
      this.clippedText = idOrProps.text;
      this.image = idOrProps.imageId ? new Image({ id: idOrProps.imageId }) : null;
      this.dateTime = new MyDate(idOrProps.dateTime);
      this.isLiked = idOrProps.isLiked;
      this.likesCount = idOrProps.likesCount;
      this.author = new MinUser(idOrProps.author);
      this.isPublic = idOrProps.isPublic;
      this.commentCount = idOrProps.commentCount;
      this.isClipped = idOrProps.isClipped;
    }
    
  }
}
