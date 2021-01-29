import React, { Component } from 'react';
import style from '../css/header.module.css';
import LoginButton from './login_button';
import Logo from './logo';
import Navbar from './navbar';

class Header extends Component {
  render() {
    return (
      <header className={style.header}>
        <Logo />
        <Navbar />
        <LoginButton />
      </header>
    );
  }
}

export default Header;
