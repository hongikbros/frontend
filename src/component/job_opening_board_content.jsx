import React from 'react';
import style from '../css/job_opening_board.module.css';

const JobOpeningBoardContent = (props) => {
  const { companyName, deadline, title } = props;
  return (
    <div className={style.jobOpeningBoardContent}>
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
