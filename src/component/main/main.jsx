import React from 'react';
import Calendar from '../calendar/calendar';
import UserNote from '../user_note/user_note';
import styles from './main.module.css';

const Main = ({ boardInfo }) => (
  <>
    <main className={styles.main}>
      <Calendar boardInfo={boardInfo} />
      <UserNote boardInfo={boardInfo} />
    </main>
  </>
);
export default Main;
