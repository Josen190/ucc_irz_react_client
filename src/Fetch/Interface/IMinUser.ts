import Image from "Helpers/Image";

export default interface PropsMinUser {
  id: string;
  firstName: string;
  surname: string;
  patronymic: string | null;
  imageId: null | string | Image;
}
