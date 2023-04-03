import PropsMinUser from "../Fetch/Interface/IMinUser";
import Image from "./Image";

export default class MinUser {
  id: string;
  firstName: string;
  surname: string;
  patronymic: string;
  image: Image;

  constructor(props?: PropsMinUser) {
    if (!props) {
      return;
    }
    this.id = props.id;
    this.firstName = props.firstName;
    this.surname = props.surname;
    this.patronymic = props.patronymic ?? "";
    this.image = new Image(props.imageId ? { id: props.imageId } : null);
  }

  public getFullName(): string {
    return `${this.firstName} ${this.surname} ${this.patronymic}`;
  }
}
