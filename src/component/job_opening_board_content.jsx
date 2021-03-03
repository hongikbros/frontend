import React from 'react';
import style from '../css/job_opening_board.module.css';

const JobOpeningBoardContent = (props) => {
  const { companyName, deadline, title, id } = props;
  const onDragStart = (e) => {
    e.dataTransfer.setData('text/plain', e.target.dataset.id);

    e.currentTarget.style.backgroundColor = 'gray';
  };
  const { openModal } = props;

  return (
    <button
      className={style.jobOpeningBoardContent}
      draggable="true"
      onDragStart={onDragStart}
      data-id={id}
      type="button"
      onClick={openModal}
    >
      {companyName}
      <br />
      {deadline}
      <br />
      {title}
      <br />
    </button>
  );
};
export default JobOpeningBoardContent;
