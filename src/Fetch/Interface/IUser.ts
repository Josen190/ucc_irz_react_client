import PropsImage from "./IImage";
import PropsMinUser from "./IMinUser";
import PropsPosition from "./IPositions";

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

export interface ParamsUser extends  Omit<Omit<PropsUser, 'positions'>, 'imageId'>{
    imageId: PropsImage | null;
    positions: PropsPosition[];
}