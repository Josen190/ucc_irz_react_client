import React from "react";
import API from "../Fetch/Api";
import { notifyError } from "../Components/Notifications/Notifications";
import PropsImage from "../Fetch/Interface/IImage";

export default class Image {
  id: string;
  name?: string;
  base64?: string;
  extension?: string;
  url?: string;

  constructor()
  constructor(name: string)
  constructor(props: PropsImage)
  constructor(nameOrprops?: string | PropsImage) {
    if (!nameOrprops) {
      this.id = Math.random().toString();
    } else if (typeof nameOrprops === 'string') {
      this.id = Math.random().toString();
      this.name = nameOrprops;
    } else {
      const props = nameOrprops as PropsImage;
      this.id = props.id ?? Math.random().toString();
      this.name = props.name;
      this.base64 = props.data;
      this.extension = props.extension;
    }
  }

  private setUrl(file: any) {
    this.url = URL.createObjectURL(file);
  }

  public getImg(setImage?: React.Dispatch<React.SetStateAction<Image | undefined>>): void {
    
    API.getImage(this.id)
      .then((image) => {
        this.id = image.id;
        this.extension = image.extension;
        this.base64 = image.base64;
        this.name = image.name;
        if (setImage) setImage(this);
      })
      .catch(() => {
        notifyError("Ошибка не удалось загрузить изображение");
      });
  }

  public toFetch(): { [keys: string]: string } | null {
    if (!this.name || !this.extension || !this.base64) return null;
    return {
      name: this.name,
      extension: this.extension,
      data: this.base64,
    };
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
        if (typeof result === "string"){
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

  public getType(): PropsImage{
    return{
      id: this.id,
      name: this.name,
      data: this.base64,
      extension: this.extension,
    } 
  }
}
