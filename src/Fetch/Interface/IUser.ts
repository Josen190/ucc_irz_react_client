import PropsMinUser from "./IMinUser";

export default interface PropsUser extends PropsMinUser {
  birthday: string;
  aboutMyself: string | null;
  myDoings: string | null;
  skills: string | null;
  subscribersCount: number;
  subscriptionsCount: number;
  isSubscription: boolean;
  email: string;
  isActiveAccount: boolean;
  roles: string[];
  positions: string[];
}