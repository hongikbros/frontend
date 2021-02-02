import React from 'react';
import moment from 'moment';
import style from '../css/calendar.module.css';
import CalendarDay from './calendar_day';

const getDay = (props) => {
  const { day } = props;
  return Array(7)
    .fill(0)
    .map((data, index) => {
      const days = day
        .clone()
        .startOf('year')
        .week(props.week)
        .startOf('week')
        .add(index, 'day');

      if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
        let className = `calendarDay calendarDayToday`;
        if (index === 0) {
          className += ' red';
        } else if (index === 6) {
          className += ' blue';
        }
        return (
          <CalendarDay
            key={days}
            day={days.format('D')}
            className={className}
          />
        );
      }
      if (days.format('MM') !== props.day.format('MM')) {
        return (
          <CalendarDay
            key={days}
            day={days.format('D')}
            className="calendarDay calendarDayNotThisMonth"
          />
        );
      }
      let className = `calendarDay`;
      if (index === 0) {
        className += ' red';
      } else if (index === 6) {
        className += ' blue';
      }
      return (
        <CalendarDay key={days} day={days.format('D')} className={className} />
      );
    });
};

const CalendarWeek = (props) => (
  <div className={style.calendarWeek}>{getDay(props)}</div>
);

export default CalendarWeek;
