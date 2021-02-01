import React, { Component } from 'react';
import style from '../css/main.module.css';
import searchIcon from '../images/search_icon.svg';

class Search extends Component {
  render() {
    return (
      <form action="local">
        <input type="text" />
        <button type="submit">
          <img src={searchIcon} alt="serach_icon" className={style.utilIcons} />
        </button>
      </form>
    );
  }
}

export default Search;
