import PropsMinUser from "../Fetch/Interface/IMinUser";
import Image from "./Image";

export default class User {
  private static AuntificationuUser: User | null = null;
  id: string;
  firstName: string;
  surname: string;
  patronymic: string;
  image: Image | null;

  constructor(props?: PropsMinUser) {
    if (!props) {
      this.id = User.AuntificationuUser?.id ?? "";
      this.firstName = User.AuntificationuUser?.firstName ?? '';
      this.surname = User.AuntificationuUser?.surname ?? '';
      this.patronymic = User.AuntificationuUser?.patronymic ?? '';
      this.image = User.AuntificationuUser?.image ?? null;
      return;
    }
    this.id = props.id;
    this.firstName = props.firstName;
    this.surname = props.surname;
    this.patronymic = props.patronymic ?? "";
    this.image = props.imageId ? new Image({ id: props.imageId }) : null;
  }

  public static setAuntificationuUser(user: User) {
    User.AuntificationuUser = user;
  }

  public getFullName(): string {
    return `${this.firstName} ${this.surname} ${this.patronymic}`;
  }

  public isAuntification() {
    return this.id === User.AuntificationuUser?.id;
  }

  public setImage(image: Image){
    this.image = new Image(image);
    return this;
  }

  public getType(){
    return {
      id: this.id,
      firstName: this.firstName,
      surname: this.surname,
      patronymic: this.patronymic.length !== 0? this.patronymic : null,
      imageId: this.image ? this.image.getType() : null,
    }
  }
}
