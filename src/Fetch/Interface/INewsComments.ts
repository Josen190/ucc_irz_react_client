import PropsMinUser from "./IMinUser";

export default interface PropsNewsComments {
  id: string;
  text: string;
  dateTime: string;
  user: PropsMinUser;
}
