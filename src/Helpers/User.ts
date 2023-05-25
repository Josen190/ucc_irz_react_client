export default class User extends VisitingUser {
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
  positions: Position[] | null;


  constructor(props: PropsUser){
    super({
      id: props.id,
      firstName: props.firstName,
      surname: props.surname,
      patronymic: props.patronymic,
      imageId: props.imageId,
    });

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

    this.positions = props.positions ? props.positions.map(p => {
      if (typeof p === "string") {
        return new Position(p)
      } else {
        return new Position(p)
      }
    }) : null;
  }

  public getParams = (): ParamsUser => ({
    ...super.getParams(),
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
    positions: this.positions ? this.positions.map(x => x.getType()) : null,
  });
}
