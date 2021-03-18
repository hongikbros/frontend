import React from 'react';
import Board from '../board/board';
import Calendar from '../calendar/calendar';
import Search from '../search/search';
import styles from './main.module.css';

const Main = ({ calendarInfo, sendSearchData, boardContent }) => (
  <>
    <main className={styles.main}>
      <Calendar calendarInfo={calendarInfo} />
    </main>
  </>
);
export default Main;
