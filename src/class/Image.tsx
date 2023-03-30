import React from "react";
import API, { url_get_images_id } from "../api/Api";
import { notifyError } from "../Components/Notifications/Notifications"

interface PropsImage {
  id?: string,
  name?: string,
  extension?: string,
  data?: string
}

export default class Image {
  id: string;
  name: string;
  base64: string;
  extension: string;
  img: JSX.Element;

  constructor(props: PropsImage) {
    if (!props.id && !props.name !&& props.extension && props.data)
    if (props.id && (!props.name || !props.extension || !props.data)) {
      this.getImg(props.id);
    } else if (props.id && props.name && props.extension && props.data) {
      this.img = this.toImgJSX(props.id, props.extension, props.data, props.name)
    } 
  }

  private getImg(id: string): void {
    if (id === null || id === undefined) {
      return null;
    }

    API.get(url_get_images_id(id))
      .then((response) => {
        this.img = this.toImgJSX(response.data.id, response.data.extension, response.data.data, response.data.name);
      })
      .catch(() => {
        notifyError("Ошибка не удалось загрузить изображение");
      });
  }

  private toImgJSX(key: string, extension: string, base64: string, alt: string) {
    return (
      <img
        key={key}
        src={`data:${extension};base64,${base64}`}
        alt={alt}
      ></img>
    )
  }

  // public static async toBase64(): Image {

  //   return new Image()
  // }

}