import React, { useRef, useState } from 'react';
import style from './board_register_modal.module.css';

const BoardRegisterModal = ({ closeModal, sendBoardData }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const board = {
      id: Date.now(),
      company: urlRef.current.value,
      startDate: checked ? '0000-00-00' : startDateRef.current.value,
      endDate: checked ? '9999-99-99' : endDateRef.current.value,
    };
    console.log(board);

    sendBoardData(board);
    closeModal();
  };

  const [checked, setCheck] = useState(false);

  const handleCheckboxChange = () => {
    setCheck(!checked);
  };

  const urlRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();

  return (
    <div className={style.modalWrap}>
      <button type="button" className={style.closeButton} onClick={closeModal}>
        닫기
      </button>
      <form className={style.form} onSubmit={onSubmit}>
        <input
          ref={urlRef}
          name="board_url"
          type="url"
          className={style.urlInput}
          placeholder="board url..."
        />
        <input
          name="start_date"
          type="date"
          ref={startDateRef}
          disabled={checked && true}
        />
        <input
          name="end_date"
          type="date"
          ref={endDateRef}
          disabled={checked && true}
        />
        <label name="immediate_opening">상시 모집</label>
        <input
          name="immediate_opening"
          type="checkbox"
          onChange={handleCheckboxChange}
        />
        <button type="submit" className={style.boardSubmitButton}>
          등록
        </button>
      </form>
    </div>
  );
};

export default BoardRegisterModal;
