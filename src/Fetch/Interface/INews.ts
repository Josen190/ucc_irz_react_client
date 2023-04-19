import PropsMinUser from "./IMinUser";

export default interface PropsNews {
  id: string;
  title: string;
  text: string;
  imageId: string | null;
  dateTime: string;
  isLiked: boolean;
  likesCount: number;
  author: PropsMinUser;
  isPublic: boolean;
  commentCount: number;
  isClipped: boolean;
}
