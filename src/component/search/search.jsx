import React, { useRef } from 'react';
import styles from './search.module.css';

const Search = ({ sendSearchData }) => {
  const inputRef = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(sendSearchData.send(inputRef.current.value));
  };

  return (
    <form className={styles.searchForm} action="search" onSubmit={onSubmit}>
      <input type="text" className={styles.searchInput} ref={inputRef} />
      <button type="submit" className={styles.searchBtn}>
        <img
          src="./images/search_icon.svg"
          alt="search"
          className={styles.searchImg}
        />
      </button>
    </form>
  );
};

export default Search;
