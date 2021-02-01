import React, { Component } from 'react';
import style from '../css/calendar.module.css';

class CalendarWeek extends Component {
  render() {
    // const getDay = () =>
    //   Array(7)
    //     .fill(0)
    //     .map((data, index) => {
    //       let day = this.props.today
    //         .clone()
    //         .startOf('year')
    //         .week(this.props.week)
    //         .startOf('week')
    //         .add(index, 'day');
    //     });
    return <div className={style.calendarWeek}>하이</div>;
  }
}

export default CalendarWeek;
