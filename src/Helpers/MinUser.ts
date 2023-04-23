import PropsMinUser from "../Fetch/Interface/IMinUser";
import Image from "./Image";

export default class MinUser {
  private static AuntificationuUser: MinUser | null = null;
  id: string;
  firstName: string;
  surname: string;
  patronymic: string;
  image: Image | null;

  constructor(props?: PropsMinUser) {
    if (!props) {
      this.id = MinUser.AuntificationuUser?.id ?? "";
      this.firstName = MinUser.AuntificationuUser?.firstName ?? '';
      this.surname = MinUser.AuntificationuUser?.surname ?? '';
      this.patronymic = MinUser.AuntificationuUser?.patronymic ?? '';
      this.image = MinUser.AuntificationuUser?.image ?? null;
      return;
    }
    this.id = props.id;
    this.firstName = props.firstName;
    this.surname = props.surname;
    this.patronymic = props.patronymic ?? "";
    this.image = props.image ? new Image({ id: props.image }) : null;
  }

  public static setAuntificationuUser(user: MinUser) {
    MinUser.AuntificationuUser = user;
  }

  public static getAuntificationuUser() {
    return MinUser.AuntificationuUser ?? new MinUser();
  }

  public getFullName(): string {
    return `${this.firstName} ${this.surname} ${this.patronymic}`;
  }

  public isAuntification() {
    return this.id === MinUser.AuntificationuUser?.id;
  }

  public setImage(image: Image){
    this.image = new Image(image);
    return this;
  }

  public getType(){
    return{
      id: this.id,
      firstName: this.firstName,
      surname: this.surname,
      patronymic: this.patronymic.length !== 0? this.patronymic : null,
      image: this.image ? this.image.getType() : null,
    }
  }
}
