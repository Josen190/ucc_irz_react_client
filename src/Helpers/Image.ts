import React from "react";
import { notifyError } from "../Components/Notifications/Notifications";
import PropsImage from "../Fetch/Interface/IImage";
import getImage from "Fetch/getImage";
import {Guid} from "guid-ts";
import initImg from "Assets/init_img.jpg"

export default class Image {
  id: string;
  name?: string;
  url?: string;
  isConst: boolean;
  readonly formData = new FormData();

  constructor()
  constructor(imageId: string)
  constructor(blob: Blob, imageId: string)
  constructor(blob?: Blob | string, imageId?: string) {
    if (!blob) {
      this.id = Guid.newGuid().toString();
      this.name = "init_img";
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      this.url = require("Assets/init_img.jpg").toString() as string;
      this.isConst = true;
    } else {
      if (typeof blob === 'string'){
        this.id = blob;
      }else{
        this.id = imageId ?? Guid.newGuid().toString();
        this.url = URL.createObjectURL(blob);
      }
      this.isConst = false;
    }
  }

  private setUrl(file: File) {
    this.url = URL.createObjectURL(file);
    this.formData.append(this.name ?? "file", file);
  }

  public setId(id: string){
    this.id = id;
  }

  public getImg(setImage?: React.Dispatch<React.SetStateAction<Image>>): void {

    getImage(this.id)
      .then((image) => {
        this.id = image.id;
        this.name = image.name;
        if (setImage) setImage(this);
      })
      .catch(() => {
        notifyError("Ошибка не удалось загрузить изображение");
      });
  }

  // public static async toBase64(file: File): Promise<Image> {
  //   const sendFile: PropsImage = {
  //     id: "new Image",
  //     name: file.name.replace(/\.[^/.]+$/, ""),
  //     extension: file.name.split(".").pop(),
  //   };
  //
  //   const reader = new FileReader();
  //   const promise = new Promise<void>((resolve, reject) => {
  //     reader.onloadend = () => {
  //       const result = reader.result;
  //       if (typeof result === "string") {
  //         sendFile.data = result.replace("data:", "").replace(/^.+,/, "");
  //         resolve();
  //       } else {
  //         reject(new Error("Invalid file type"));
  //       }
  //     };
  //   });
  //   reader.readAsDataURL(file);
  //   await promise;
  //
  //   if (!sendFile.data) return Promise.reject();
  //
  //   const image = new Image(sendFile);
  //   image.setUrl(file);
  //   return Promise.resolve(image);
  // }

  public getParams(): PropsImage {
    return {
      id: this.id,
      name: this.name,
      // url: this.url,
    }
  }

}
