import React, { Component } from 'react';
import style from '../css/logo.module.css';

class Logo extends Component {
  render() {
    return (
      <div className={style.logo}>
        Job
        <br />
        Manager
      </div>
    );
  }
}

export default Logo;
