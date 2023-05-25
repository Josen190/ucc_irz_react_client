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
