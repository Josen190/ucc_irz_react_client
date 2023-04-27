import Image from "Helpers/Image";
import API from "./Api";
import PropsImage from "./Interface/IImage";
import Queue from "Helpers/Queue";

const hashImage = new Queue<string, Image>(10);

const url_get_images_id = (id: string) => {
  return `/api/images/${id}`;
};


async function getImage(id: string): Promise<Image> {
  const image = hashImage.getValueByKey(id)
  if (image) return Promise.resolve(image);

  const result = await API
    .get(url_get_images_id(id))
    .then((response) => {
      const _image = new Image(response.data as PropsImage)
      hashImage.push(_image.id, _image);
      return Promise.resolve(_image);
    })
    .catch(() => Promise.reject(null));

  return result;
}

export default getImage;