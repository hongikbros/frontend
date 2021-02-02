import React from 'react';
import style from '../css/calendar.module.css';

const CalendarWeek = (props) => {
  const a = 324;
  const { week } = props;
  return (
    <div className={style.calendarWeek}>
      하이{a}
      {week}
    </div>
  );
};

export default CalendarWeek;
