import PropsMinUser from "../Fetch/Interface/IMinUser";
import Image from "./Image";

export default class VisitingUser {
  private static AuntificationuUser: VisitingUser | null = null;
  id: string;
  firstName: string;
  surname: string;
  patronymic: string;
  image: Image;

  constructor(props?: PropsMinUser) {
    if (!props) {
      this.id = VisitingUser.AuntificationuUser?.id ?? "";
      this.firstName = VisitingUser.AuntificationuUser?.firstName ?? '';
      this.surname = VisitingUser.AuntificationuUser?.surname ?? '';
      this.patronymic = VisitingUser.AuntificationuUser?.patronymic ?? '';
      this.image = VisitingUser.AuntificationuUser?.image ?? new Image();
      return;
    }
    this.id = props.id;
    this.firstName = props.firstName;
    this.surname = props.surname;
    this.patronymic = props.patronymic ?? "";
    this.image = props.imageId ?
        typeof props.imageId === 'string' ?
            new Image(props.imageId) : new Image(props.imageId.id, props.imageId.url)
        : new Image();
  }

  public static setAuntificationuUser(user: VisitingUser) {
    VisitingUser.AuntificationuUser = user;
  }

  public getFullName(): string {
    return `${this.firstName} ${this.surname} ${this.patronymic}`;
  }

  public isAuntification() {
    return this.id === VisitingUser.AuntificationuUser?.id;
  }

  public setImage(image: Image){
    this.image = image;
    return this;
  }

  public getParams(){
    return {
      id: this.id,
      firstName: this.firstName,
      surname: this.surname,
      patronymic: this.patronymic.length !== 0? this.patronymic : null,
      imageId: this.image ? this.image.getParams() : null,
    }
  }
}
