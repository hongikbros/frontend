import React, { Component } from 'react';
import Calander from './calander';
import JobOpening from './job_opening';
import Search from './search';

class Main extends Component {
  render() {
    return (
      <main>
        <Search />
        <Calander />
        <JobOpening />
      </main>
    );
  }
}

export default Main;
