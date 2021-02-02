import React, { Component } from 'react';
import Calendar from './calendar';
import JobOpeningBoard from './job_opening_board';
import Search from './search';
import style from '../css/main.module.css';

class Main extends Component {
  render() {
    return (
      <main className={style.main}>
        <Search />
        <Calendar />
        <JobOpeningBoard />
      </main>
    );
  }
}

export default Main;
