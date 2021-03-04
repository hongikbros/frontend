import React from 'react';
import Calendar from '../calendar/calendar';
import Search from '../search/search';
import styles from './main.module.css';

const Main = ({ calendarInfo, sendSearchData }) => (
  <>
    <main className={styles.main}>
      <Search sendSearchData={sendSearchData} />
      <Calendar calendarInfo={calendarInfo} />
    </main>
  </>
);
export default Main;
