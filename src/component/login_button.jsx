import React, { Component } from 'react';
import style from '../css/login_button.module.css';

class LoginButton extends Component {
  tryLogin = () => {
    alert('login');
  };

  render() {
    return (
      <div className={style.login__btnWrap}>
        <button
          type="button"
          onClick={this.tryLogin}
          className={style.login__btn}
        >
          로그인
        </button>
      </div>
    );
  }
}

export default LoginButton;
