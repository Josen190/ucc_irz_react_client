import PropsImage from "Fetch/Interface/IImage";

export default interface PropsMinUser {
  id: string;
  firstName: string;
  surname: string;
  patronymic: string | null;
  imageId: string | null | PropsImage;
}
