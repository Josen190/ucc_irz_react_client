import Image from "./Image";
import MyDate from "./MyDate";
import PropsUser from "../Fetch/Interface/IUser";
import MinUser from "./MinUser";
import Position from "./Positions";
import PropsImage from "../Fetch/Interface/IImage";

export default class User extends MinUser {
  birthday: MyDate;
  aboutMyself: string | null;
  myDoings: string | null;
  skills: string | null;
  subscribersCount: number;
  subscriptionsCount: number;
  isSubscription: boolean;
  email: string;
  isActiveAccount: boolean;
  roles: string[];
  positions: Position[];

  constructor(props: PropsUser) {
    super();
    this.birthday = new MyDate(props.birthday);
    this.aboutMyself = props.aboutMyself;
    this.myDoings = props.myDoings;
    this.skills = props.skills;
    this.subscribersCount = props.subscribersCount;
    this.subscriptionsCount = props.subscriptionsCount;
    this.isSubscription = props.isSubscription;
    this.email = props.email;
    this.isActiveAccount = props.isActiveAccount;
    this.roles = props.roles;
    this.positions = Position.ArrayPosition(props.positions);

    this.id = props.id;
    this.firstName = props.firstName;
    this.surname = props.surname;
    this.patronymic = props.patronymic ?? "";
    
    this.image = props.imageId ? new Image({ id: props.imageId }) : new Image("нет картинки");
  }
}
