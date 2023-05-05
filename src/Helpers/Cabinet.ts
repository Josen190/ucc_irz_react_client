import PropsCabinet from "../Fetch/Interface/ICabinet";

export default class Cabinet {
  id: string;
  name: string;

  constructor(id: string);
  constructor(props: PropsCabinet);
  constructor(arg: string | PropsCabinet) {
    if (typeof arg === "string") {
      this.id = arg;
      this.name = "";
    } else {
      this.id = arg.id;
      this.name = arg.name;
    }
  }
}
