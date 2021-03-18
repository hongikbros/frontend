import React from 'react';
import style from './user_note.module.css';
import { BiAddToQueue } from 'react-icons/bi';

const UserNote = ({ boardInfo }) => (
  <div className={style.userNote}>
    <form className={style.boardForm}>
      <input
        className={style.boardInput}
        placeholder="공고를 입력해주세요..."
      />
      <BiAddToQueue className={style.boardInputIcon} />
    </form>
    <ul className={style.boardList}>
      {boardInfo.map((info) => {
        return (
          <li className={style.boardItem}>
            {info.company} {info.date}
          </li>
        );
      })}
    </ul>
  </div>
);

export default UserNote;
