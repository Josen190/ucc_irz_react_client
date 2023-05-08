import React from "react";
import { notifyError } from "../Components/Notifications/Notifications";
import PropsImage from "../Fetch/Interface/IImage";
import getImage from "Fetch/getImage";
import ConstImage from "../Constatnts/ConstImage";
import {Guid} from "guid-ts";

export default class Image {
  id: string;
  name?: string;
  data?: string;
  extension?: string;
  url?: string;
  isConst: boolean;

  constructor()

  /**
   @param props.name имя изображения
   @param props.extension расширение изображения
   @param props.data данные изображение в base64
   */
  constructor(props: PropsImage)
  constructor(props?: PropsImage) {
    if (!props) {
      this.id = Guid.newGuid().toString();
      this.name = ConstImage.name;
      this.extension = ConstImage.extension;
      this.data = ConstImage.data;
      this.isConst = true;
    } else {
      if (!props.id){
        this.id = Guid.newGuid().toString();
        this.isConst = true;
      }else{
        this.id = props.id;
        this.isConst = false;
      }
      this.name = props.name;
      this.data = props.data;
      this.extension = props.extension;
    }
  }

  private setUrl(file: File) {
    this.url = URL.createObjectURL(file);
  }

  public getImg(setImage?: React.Dispatch<React.SetStateAction<Image>>): void {

    getImage(this.id)
      .then((image) => {
        this.id = image.id;
        this.extension = image.extension;
        this.data = image.data;
        this.name = image.name;
        if (setImage) setImage(this);
      })
      .catch(() => {
        notifyError("Ошибка не удалось загрузить изображение");
      });
  }

  public static async toBase64(file: File): Promise<Image> {
    const sendFile: PropsImage = {
      id: "new Image",
      name: file.name.replace(/\.[^/.]+$/, ""),
      extension: file.name.split(".").pop(),
    };

    const reader = new FileReader();
    const promise = new Promise<void>((resolve, reject) => {
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result === "string") {
          sendFile.data = result.replace("data:", "").replace(/^.+,/, "");
          resolve();
        } else {
          reject(new Error("Invalid file type"));
        }
      };
    });
    reader.readAsDataURL(file);
    await promise;

    if (!sendFile.data) return Promise.reject();

    const image = new Image(sendFile);
    image.setUrl(file);
    return Promise.resolve(image);
  }

  public getParams(): PropsImage {
    return {
      id: this.id,
      name: this.name,
      data: this.data,
      extension: this.extension,
    }
  }

  public getParamsToSend(){
    if (this.name && this.extension && this.data)
      return {
        Name: this.name,
        Extension: this.extension,
        Data: this.data,
      }
    return null;
  }
}
