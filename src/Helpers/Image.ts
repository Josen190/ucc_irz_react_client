import PropsImage from "../Fetch/Interface/IImage";
import {Guid} from "guid-ts";


export default class Image {
  id: string;
  name: string;
  url?: string;
  isConst: boolean;
  blob = new Blob();
  file?: File;

  constructor()
  constructor(imageId: string)
  constructor(imageId: string, url?: string)
  constructor(blob: Blob, imageId: string)
  constructor(pram1?: Blob | string, param2?: string) {
    this.name = "init_img";
    if (!pram1) {
      this.id = Guid.newGuid().toString();
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      this.url = require("Assets/init_img.jpg").toString() as string;
      this.isConst = true;
    } else {
      if (typeof pram1 === 'string'){
        this.id = pram1;
        if (typeof param2 === 'string'){
          this.url = param2;
        }
      }else{
        this.id = param2 ?? Guid.newGuid().toString();
        this.blob = pram1;
        this.url = URL.createObjectURL(pram1);
      }
      this.isConst = false;
    }
  }

  public setUrl(file: File) {
    this.url = URL.createObjectURL(file);
  }

  public setId(id: string){
    this.id = id;
  }

  public static getImg(file: File) {
    const img = new Image(new Blob([file]), Guid.newGuid().toString())
    img.setUrl(file)
    img.name = file.name;
    img.file = file;
    return img;
  }

  public getParams(): PropsImage {
    return {
      id: this.id,
      url: this.url
    }
  }

}
