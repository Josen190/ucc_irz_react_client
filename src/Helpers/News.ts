import PropsNews from "../Fetch/Interface/INews";
import Image from "./Image";
import VisitingUser from "./VisitingUser";
import MyDate from "./MyDate";

export default class News {
  public readonly id: string;
  public title: string;
  public text: string;
  public image: Image | null;
  public readonly dateTime: MyDate;
  public isLiked: boolean;
  public likesCount: number;
  public readonly author: VisitingUser;
  public readonly isPublic: boolean;
  public commentCount: number;
  public isClipped: boolean;

  constructor(id: string, title: string, fullText: string, isPublic: boolean, author: VisitingUser, image?: Image)
  constructor(props: PropsNews) 
  constructor(idOrProps: string | PropsNews, title?: string, fullText?: string, isPublic?: boolean, author?: VisitingUser, image?: Image)
  {
    const sizeClippedText = 256;
    if (typeof idOrProps === 'string'){

      this.id = idOrProps;
      this.title = title ?? "";
      this.text = fullText ? fullText : "";
      this.image = image ?? null;
      this.dateTime = new MyDate();
      this.isLiked = false;
      this.likesCount = 0;
      this.author = author ?? new VisitingUser();
      this.isPublic = isPublic ?? false;
      this.commentCount = 0;
      this.isClipped = !!(fullText && fullText.length > sizeClippedText);

    } else{
      this.id = idOrProps.id;
      this.title = idOrProps.title;
      this.text = idOrProps.text;
      this.image = idOrProps.imageId ? new Image(idOrProps.imageId) : null;
      this.dateTime = new MyDate(idOrProps.dateTime);
      this.isLiked = idOrProps.isLiked;
      this.likesCount = idOrProps.likesCount;
      this.author = new VisitingUser(idOrProps.author);
      this.isPublic = idOrProps.isPublic;
      this.commentCount = idOrProps.commentCount;
      this.isClipped = idOrProps.isClipped;
    }
    
  }

  public setFullText(text: string){
    // this.text += text;
    this.text = text;
    this.isClipped = false;
  }

}
