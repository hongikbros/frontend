import React, { Component } from 'react';
import moment from 'moment';
import CalendarWeek from './calendar_week';
import style from '../css/calendar.module.css';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: moment(),
    };
  }

  render() {
    const { today } = this.state;
    const firstWeek = today.clone().startOf('month').week();
    const lastWeek =
      today.clone().endOf('month').week() === 1
        ? 53
        : today.clone().endOf('month').week();

    const getWeek = () => {
      let result = [];
      let week = firstWeek;
      for (week; week <= lastWeek; week += 1) {
        result = result.concat(
          <CalendarWeek key={week} week={week} today={today} />,
        );
      }

      return result;
    };

    return (
      <div className={style.calendarWrap}>
        <div className={style.calendarHeader}>
          <button
            type="button"
            onClick={() => {
              const momentUpper = today.clone().subtract(1, 'month');
              this.setState({ today: momentUpper });
            }}
          >
            이전 달
          </button>
          {today.format('YY-MM')}
          <button
            type="button"
            onClick={() => {
              const momentLower = today.clone().add(1, 'month');
              this.setState({ today: momentLower });
            }}
          >
            다음 달
          </button>
        </div>
        <div className={style.calendar}>{getWeek()}</div>
      </div>
    );
  }
}

export default Calendar;
