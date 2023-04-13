import PropsPosition from "../Fetch/Interface/IPositions";
import MyDate from "./MyDate";

export default class Position {
  public name: string;

  private start: MyDate;
  private end: MyDate;
  private isload: boolean;

  constructor(name: string)
  constructor(props: PropsPosition)
  constructor(namrOrProps: string | PropsPosition) {
    if (typeof namrOrProps === 'string') {
      this.name = namrOrProps;
      this.isload = false;
      this.start = new MyDate();
      this.end = new MyDate();
    } else {
      this.name = namrOrProps.name;
      this.start = new MyDate(namrOrProps.start);
      this.end = new MyDate(namrOrProps.end);
      this.isload = true;
    }

  }

  public getDate(): {
    start: MyDate,
    end: MyDate,
  } | boolean {
    if (this.isload) return false;
    return { start: this.start, end: this.end }
  }

  static ArrayPosition(positionsName: string[]): Position[] {
    const positions: Position[] = [];
    positionsName.forEach((name) => {
      positions.push(new Position(name))
    })
    return positions;
  }

}
