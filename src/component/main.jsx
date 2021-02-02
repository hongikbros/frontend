import React, { Component } from 'react';
import Calendar from './calendar';
import JobOpening from './job_opening';
import Search from './search';
import style from '../css/main.module.css';

class Main extends Component {
  render() {
    return (
      <main className={style.main}>
        <Search />
        <Calendar />
        <JobOpening />
      </main>
    );
  }
}

export default Main;
