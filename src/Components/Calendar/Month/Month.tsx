import React, { Component, useState } from "react";
import { useEffect } from "react";
import useMeasure from "react-use-measure";
import Day from "../Day/Day";
import API, { url_get_events_my } from "../../../api/Api";
import ContextMenu from "../../basic/ContextMenu/ContextMenu";
import ContextButton from "../../basic/ContextMenu/ContextButton/ContextButton";
import MyDate from "../../../class/MyDate";
import "./month.css";
import Event from "../../../class/Event";

interface Props {
  year: number;
  numberMonth: number;
  setSelectedDay: React.Dispatch<React.SetStateAction<Date | null>>;
}

interface PropsScreenPosition {
  screenX: number;
  screenY: number;
  day: MyDate | null;
}

// numberMonth - нумерация месяцев начинается с 0 - январь ...
function showMonth(year: number, numberMonth: number) {
  // получение дня недели для первого дня месяца
  let firstDayOfMonth = new MyDate(year, numberMonth, 1).getDay();
  // 0 - воскресенье, 6 - воскресенье
  firstDayOfMonth = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
  let firstDayOfCalendar = new MyDate(year, numberMonth, 1);
  firstDayOfCalendar.setDate(firstDayOfCalendar.getDate() - firstDayOfMonth);

  let indexDay = new MyDate(firstDayOfCalendar);
  let arrDayOfCalendar: MyDate[][] = [];
  for (let i = 0; i < 5; i++) {
    arrDayOfCalendar.push([]);
    for (let j = 0; j < 7; j++) {
      arrDayOfCalendar[i].push(new MyDate(indexDay));
      indexDay.setDate(indexDay.getDate() + 1);
    }
  }
  const lastDayOfCalendar = new MyDate(indexDay);
  lastDayOfCalendar.setDate(lastDayOfCalendar.getDate() - 1);
  return { firstDayOfCalendar, lastDayOfCalendar, arrDayOfCalendar };
}

export default function Month({ year, numberMonth, setSelectedDay }) {
  const [nameDayWeekUse, setNameDayWeekFull] = useState<string[]>(
    MyDate.nameDayWeekShort
  );
  const [listEvents, setListEvents] = useState<Event[]>([]);
  const [activeContextMenu, setActiveContextMenu] = useState<boolean>(false);
  const [screenPosition, setScreenPosition] = useState<PropsScreenPosition>({
    screenX: 0,
    screenY: 0,
    day: null,
  });

  const [ref, bounds] = useMeasure();
  let isFull = false;

  let { firstDayOfCalendar, lastDayOfCalendar, arrDayOfCalendar } = showMonth(
    year,
    numberMonth
  );

  function onWidth(bounds) {
    if (isFull && bounds.width < 1050) {
      setNameDayWeekFull(MyDate.nameDayWeekShort);
      isFull = false;
    } else if (!isFull && bounds.width >= 1050) {
      setNameDayWeekFull(MyDate.nameDayWeekFull);
      isFull = false;
    }
  }

  useEffect(() => {
    API.get(url_get_events_my, {
      params: {
        Start: firstDayOfCalendar.toString(),
        End: lastDayOfCalendar.toString(),
      },
    }).then((response) => {
      setListEvents(response.data);
    });
  }, [numberMonth]);

  useEffect(() => {
    onWidth(bounds);
  }, [bounds]);

  const contextMenu = (event, day) => {
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
            {nameDayWeekUse.map((e, i) => (
              <th key={i}>{e}</th>
            ))}
          </tr>
        </thead>
        <tbody className="month-row">
          {arrDayOfCalendar.map((week, indexWeek) => (
            <tr key={indexWeek} className="month-column">
              {week.map((day, indexDay) => {
                let listEventsDay = listEvents.filter((event) => {
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
