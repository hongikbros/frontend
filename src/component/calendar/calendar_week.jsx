import React from 'react';
import moment from 'moment';
import styles from './calendar.module.css';
import CalendarDay from './calendar_day';

const CalendarWeek = ({ day, week }) => {
  const getDay = () =>
    Array(7)
      .fill(0)
      .map((data, index) => {
        const days = day
          .clone()
          .startOf('year')
          .week(week)
          .startOf('week')
          .add(index, 'day');

        if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
          let sat = false;
          let sun = false;
          if (index === 0) {
            sun = true;
          } else if (index === 6) {
            sat = true;
          }
          return (
            <CalendarDay
              key={days}
              day={days.format('D')}
              dayType={(sun && `sun`) || (sat && `sat`) || `today`}
            />
          );
        }
        if (days.format('MM') !== day.format('MM')) {
          return (
            <CalendarDay key={days} day={days.format('D')} dayType="other" />
          );
        }
        let sat = false;
        let sun = false;
        if (index === 0) {
          sun = true;
        } else if (index === 6) {
          sat = true;
        }
        return (
          <CalendarDay
            key={days}
            day={days.format('D')}
            dayType={(sun && `sun`) || (sat && `sat`) || `normal`}
          />
        );
      });

  return <div className={styles.calendarWeek}>{getDay(day, week)}</div>;
};

export default CalendarWeek;
