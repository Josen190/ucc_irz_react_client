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

  constructor(props: PropsImage) {
    if (!props.id && !props.name !&& props.extension && props.data)
    if (props.id && (!props.name || !props.extension || !props.data)) {
      this.id = props.id;
      this.getImg(props.id);
    } else if (props.id && props.name && props.extension && props.data) {
      this.id = props.id;
      this.name = props.name;
      this.extension = props.extension;
      this.base64 = props.data;
    } 
  }

  private getImg(id: string): void {
    if (id === null || id === undefined) {
      return null;
    }

    API.get(url_get_images_id(id))
      .then((response) => {
        const data: PropsImage = response.data; 
        if (data.id && data.name && data.extension && data.data) {
          this.id = data.id;
          this.name = data.name;
          this.extension = data.extension;
          this.base64 = data.data;
        }
      })
      .catch(() => {
        notifyError("Ошибка не удалось загрузить изображение");
      });
  }

  public getImgJSX() : JSX.Element {
    return (
      <img
        key={this.id}
        src={`data:${this.extension};base64,${this.base64}`}
        alt={this.name}
      ></img>
    )
  }


  // public static async toBase64(): Image {

  //   return new Image()
  // }

}