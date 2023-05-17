import IFetchPositions from "Fetch/Interface/IFetchPositions";

export default class Position {
  public id: string;
  public name: string;

  constructor({ id, name }: IFetchPositions) {
    this.id = id;
    this.name = name;
  }

  public getType(): IFetchPositions{
    return {
      id: this.id,
      name: this.name,
    }
  }

}
