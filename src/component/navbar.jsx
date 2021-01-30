import React, { Component } from 'react';
import style from '../css/navbar.module.css';

class Navbar extends Component {
  render() {
    return (
      <nav className={style.navbar}>
        <ul className={style.navbar__link}>
          <li className={style.navbar__linkItems}>
            <a href="company" className={style.navbar__linkItemsContent}>
              기업
            </a>
          </li>
          <li className={style.navbar__linkItems}>
            <a href="hire_board" className={style.navbar__linkItemsContent}>
              공고
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
