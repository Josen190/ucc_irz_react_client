import PropsImage from "./IImage";
import PropsMinUser from "./IMinUser";
import IFetchPositions from "./IFetchPositions";

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
  positions: IFetchPositions[] | null;
}

export interface ParamsUser extends  Omit<PropsUser, 'imageId'>{
    imageId: PropsImage | null;
}

