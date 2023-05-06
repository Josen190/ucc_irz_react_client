
import MyDate from "Helpers/MyDate";
import ContextMenu, { ContextButton } from "Modules/ContextMenu";
import React, { useState } from "react";
import useMeasure from "react-use-measure";
import Day from "../Day/Day";
import Event from "Helpers/Event";

import "./month.scss";
import useWidth from "../../Hooks/useWidth";
import showMonth from "../../Helpers/showMonth";
import useGetMyEvents from "../../Hooks/useGetMyEvents";

interface Props {
  year: number;
  numberMonth: number;
  setSelectedDay: (day: MyDate | null) => void;
}

interface ParamsNameDayWeekUse {
  isFull: boolean;
  nameDay: string[];
}

interface ParamsScreenPosition {
  screenX: number;
  screenY: number;
  day: MyDate | null;
}

export interface ParamsOpenEvent {
  isActive: boolean;
  event: ParamsOpenEvent['isActive'] extends true ? Event : null;
}

export default function Month({ year, numberMonth, setSelectedDay }: Props) {
  const [nameDayWeekUse, setNameDayWeekFull] = useState<ParamsNameDayWeekUse>({
    isFull: false,
    nameDay: MyDate.nameDayWeekShort,
  });

  const [activeContextMenu, setActiveContextMenu] = useState<boolean>(false);

  const [screenPosition, setScreenPosition] = useState<ParamsScreenPosition>({
    screenX: 0,
    screenY: 0,
    day: null,
  });

  const [ref, bounds] = useMeasure();

  const { firstDayOfCalendar,
    lastDayOfCalendar,
    arrDayOfCalendar } = showMonth(year, numberMonth);

  const listEvents = useGetMyEvents(firstDayOfCalendar, lastDayOfCalendar);
  useWidth(bounds, setNameDayWeekFull, nameDayWeekUse);

  const contextMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, day: MyDate) => {
    event.preventDefault();
    setActiveContextMenu(true);
    setScreenPosition({
      screenX: event.clientX,
      screenY: event.clientY,
      day: day,
    });
  };

  return (
    <div
      className="month"
      onClick={() => {
        setActiveContextMenu(false);
      }}
    >
      <table>
        <thead>
          <tr ref={ref} className="month-column">
            {nameDayWeekUse.nameDay.map((e, i) => (
              <th key={i}>{e}</th>
            ))}
          </tr>
        </thead>
        <tbody className="month-row">
          {arrDayOfCalendar.map((week, indexWeek) => (
            <tr key={indexWeek} className="month-column">
              {week.map((day, indexDay) => {
                const listEventsDay = listEvents.filter((event) => {
                  return day.equate(event.start);
                });

                return (
                  <td key={indexDay}>
                    <Day
                      day={day}
                      month={numberMonth}
                      listEvents={listEventsDay}
                      activeContextMenu={contextMenu}
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {activeContextMenu && (
        <ContextMenu
          screenX={screenPosition.screenX}
          screenY={screenPosition.screenY}
        >
          <ContextButton
            onClick={() => {
              setSelectedDay(screenPosition.day);
              setActiveContextMenu(false);
            }}
          >
            Добавить событие
          </ContextButton>
        </ContextMenu>
      )}
    </div>
  );
}

