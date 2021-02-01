import React, { Component } from 'react';
import style from '../css/main.module.css';
import searchIcon from '../images/search_icon.svg';

class Search extends Component {
  render() {
    return (
      <div className={style.formWrap}>
        <form action="local" className={style.searchForm}>
          <input type="text" className={style.searchInput} />
          <button type="submit" className={style.searchBtn}>
            <img
              src={searchIcon}
              alt="serach_icon"
              className={style.utilIcons}
            />
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
