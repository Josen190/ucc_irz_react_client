import PropsImage from "../Fetch/Interface/IImage";
import {Guid} from "guid-ts";


export default class Image {
  id: string;
  name?: string;
  url?: string;
  isConst: boolean;
  readonly formData = new FormData();

  constructor()
  constructor(imageId: string)
  constructor(imageId: string, url?: string)
  constructor(blob: Blob, imageId: string)
  constructor(pram1?: Blob | string, param2?: string) {
    if (!pram1) {
      this.id = Guid.newGuid().toString();
      this.name = "init_img";
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
        this.url = URL.createObjectURL(pram1);
      }
      this.isConst = false;
    }
  }

  public setUrl(file: File) {
    this.url = URL.createObjectURL(file);
    this.formData.append(this.name ?? "file", file);
  }

  public setId(id: string){
    this.id = id;
  }

  public static getImg(file: File) {
    console.log(new Blob([file]))
    const img = new Image(Guid.newGuid().toString())
    img.setUrl(file)
    return img;
  }

  public getParams(): PropsImage {
    return {
      id: this.id,
      url: this.url
    }
  }

}
