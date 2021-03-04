import React from 'react';
import Search from '../search/search';
import styles from './main.module.css';

const Main = ({ calendarInfo, sendSearchData }) => (
  <>
    <main className={styles.main}>
      <h1>{calendarInfo}</h1>
      <Search sendSearchData={sendSearchData} />
    </main>
  </>
);
export default Main;
