import React, { Component } from 'react';
import Calander from './calander';
import JobOpening from './job_opening';
import Search from './search';
import style from '../css/main.module.css';

class Main extends Component {
  render() {
    return (
      <main className={style.main}>
        <Search />
        <Calander />
        <JobOpening />
      </main>
    );
  }
}

export default Main;
