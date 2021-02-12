import React from 'react';
import style from '../css/job_opening_board.module.css';

const JobOpeningBoardContent = (props) => {
  const { companyName, deadline, title, id } = props;
  const onDragStart = (e) => {
    e.dataTransfer.setData('text/plain', e.target.dataset.id);

    e.currentTarget.style.backgroundColor = 'gray';
  };
  return (
    <div
      className={style.jobOpeningBoardContent}
      draggable="true"
      onDragStart={onDragStart}
      data-id={id}
    >
      {companyName}
      <br />
      {deadline}
      <br />
      {title}
      <br />
    </div>
  );
};
export default JobOpeningBoardContent;
