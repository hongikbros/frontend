import React from 'react';
import style from './board_register_modal.module.css';

const BoardRegisterModal = ({ closeModal, sendBoardData }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    sendBoardData(e);
    closeModal();
  };
  return (
    <div className={style.modalWrap}>
      <button type="button" className={style.closeButton} onClick={closeModal}>
        닫기
      </button>
      <form className={style.form} onSubmit={onSubmit}>
        <input
          name="board_url"
          type="url"
          className={style.urlInput}
          placeholder="board url..."
        />
        <input name="start_date" type="date" />
        <input name="end_date" type="date" />
        <button type="submit" className={style.boardSubmitButton}>
          등록
        </button>
      </form>
    </div>
  );
};

export default BoardRegisterModal;
