import React from 'react';
import styles from './calendar.module.css';

const CalendarDay = ({ day, dayType }) => {
  const getDayType = (type) => {
    switch (type) {
      case 'sat':
        return styles.sat;
      case 'sun':
        return styles.sun;
      case 'normal':
        return styles.normal;
      case 'other':
        return styles.other;
      case 'today':
        return styles.today;
      default:
        throw new Error('unknown');
    }
  };

  return (
    <div className={`${styles.calendarDay} ${getDayType(dayType)}`}>{day}</div>
  );
};
export default CalendarDay;
