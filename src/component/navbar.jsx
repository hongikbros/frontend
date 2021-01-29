import React, { Component } from 'react';
import style from '../css/navbar.module.css';

class Navbar extends Component {
  render() {
    return (
      <nav className={style.navbar}>
        <ul className={style.navbar__link}>
          <li className={style.navbar__link_items}>기업</li>
          <li className={style.navbar__link_items}>공고</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
