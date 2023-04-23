import Image from "./Image";
import MyDate from "./MyDate";
import PropsUser, { ParamsUser } from "../Fetch/Interface/IUser";
import MinUser from "./MinUser";
import Position from "./Positions";
import PropsImage from "Fetch/Interface/IImage";

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

  constructor(props: ParamsUser)
  constructor(props: PropsUser)
  constructor(props: ParamsUser | PropsUser) {
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

    this.positions = props.positions.map(p => {
      if (typeof p === "string") {
        return new Position(p)
      } else {
        return new Position(p)
      }

    })

    this.id = props.id;
    this.firstName = props.firstName;
    this.surname = props.surname;
    this.patronymic = props.patronymic ?? "";

    this.image = props.imageId ?
      typeof props.imageId === 'string' ?
        new Image({ id: props.imageId }) : new Image(props.imageId)
      : null;
  }

  public getType(): ParamsUser {
    return {
      ...super.getType(),
      birthday: this.birthday.toString(),
      aboutMyself: this.aboutMyself,
      myDoings: this.myDoings,
      skills: this.skills,
      subscribersCount: this.subscribersCount,
      subscriptionsCount: this.subscriptionsCount,
      isSubscription: this.isSubscription,
      email: this.email,
      isActiveAccount: this.isActiveAccount,
      roles: this.roles,
      positions: this.positions.map(x => x.getType()),
    }
  }
}
