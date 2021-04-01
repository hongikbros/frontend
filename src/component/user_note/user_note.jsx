import React from 'react';
import style from './user_note.module.css';

const UserNote = ({ boardInfo, openModal }) => {
  return (
    <div className={style.userNote}>
      <button
        type="button"
        onClick={openModal}
        className={style.registerBoard}
        onClick={openModal}
      >
        공고 등록
      </button>
      <ul className={style.boardList}>
        {boardInfo.map((info) => {
          return (
            <li className={style.boardItem} key={info.id}>
              {info.company} {`${info.startDate} ~ ${info.endDate}`}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserNote;
