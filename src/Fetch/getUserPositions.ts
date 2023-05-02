import { url_get_user_positions } from "Constatnts/url";
import Position from "Helpers/Positions";
import PropsPosition from "./Interface/IPositions";
import fetch from "./Fetch";

async function getUserPositions(
    userId: string
  ): Promise<Position[]> {
    const result: PropsPosition[] | undefined = await fetch
      .get(url_get_user_positions, { params: { userId: userId } })
      .then((response) => response.data)
      .catch(() => undefined);

    if (!result) return Promise.reject(null);

    const positions: Position[] = [];
    result.forEach((position) => {
      positions.push(new Position(position));
    });

    return Promise.resolve(positions);
  }

  export default getUserPositions;