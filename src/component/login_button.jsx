import React, { Component } from 'react';
import style from '../css/login_button.module.css';

class LoginButton extends Component {
  render() {
    return (
      <button type="button" className={style.login__btn}>
        로그인
      </button>
    );
  }
}

export default LoginButton;
