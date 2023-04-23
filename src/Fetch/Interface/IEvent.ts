import PropsMinUser from "./IMinUser";

export default interface PropsEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  cabinetName: string | null;
  description?: string;
  isPublic?: boolean;
  listenersIds?: string[];
  creator: PropsMinUser;
}
