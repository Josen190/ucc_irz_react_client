import Image from "Helpers/Image";
import Queue from "Helpers/Queue";
import fetch from "./Fetch";

const hashImage = new Queue<string, Image>(10);

const url_get_images_id = (id: string) => {
  return `/api/images/${id}`;
};


async function getImage(id: string): Promise<Image> {
  const image = hashImage.getValueByKey(id)
  if (image)
      return Promise.resolve(image);

  return await fetch
      .get(url_get_images_id(id), {
          responseType: 'blob'
      })
      .then((response) => {
          const blob = new Blob([response.data])
          const _image = new Image(blob, id);
          return Promise.resolve(_image);
      })
      .catch(() => Promise.reject(null));
}

export default getImage;