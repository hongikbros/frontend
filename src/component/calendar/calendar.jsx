import React, { useState } from 'react';
import moment from 'moment';
import styles from './calendar.module.css';
import CalendarWeek from './calendar_week';

const Calendar = () => {
  const [today, setToday] = useState(moment());
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek =
    today.clone().endOf('month').week() === 1
      ? 53
      : today.clone().endOf('month').week();

  const onClick = (event) => {
    if (event.currentTarget.textContent === '이전 달') {
      setToday(today.clone().subtract(1, 'month'));
    } else {
      setToday(today.clone().add(1, 'month'));
    }
  };

  const getWeek = (startWeek, endWeek, day) => {
    let result = [];
    let week = startWeek;

    for (week; week <= endWeek; week += 1) {
      result = result.concat(<CalendarWeek day={day} week={week} key={week} />);
    }

    if (result.length === 5) {
      result = result.concat(
        <CalendarWeek day={day} week={week} key={week + 1} />,
      );
    }

    return result;
  };

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendarHeader}>
        <button
          type="button"
          onClick={onClick}
          className={styles.monthController}
        >
          이전 달
        </button>
        <span className={styles.calendarHeaderMonth}>
          {today.format('YY-MM')}
        </span>
        <button
          type="button"
          onClick={onClick}
          className={styles.monthController}
        >
          다음 달
        </button>
      </div>
      <div className={styles.calendarMain}>
        {getWeek(firstWeek, lastWeek, today)}
      </div>
    </div>
  );
};

export default Calendar;
