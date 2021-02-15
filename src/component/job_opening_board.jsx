import React, { Component } from 'react';
import JobOpeningBoardContent from './job_opening_board_content';
import style from '../css/job_opening_board.module.css';

class JobOpeningBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobOpenings: [
        {
          companyName: 'KaKao',
          deadline: '20200205',
          title: '프론트 급구',
        },
        {
          companyName: 'Samsung',
          deadline: '20200221',
          title: '백 급구',
        },
        {
          companyName: 'Facebook',
          deadline: '20200301',
          title: '네트워크 급구',
        },
      ],
    };
  }

  render() {
    const { jobOpenings } = { ...this.state };
    return (
      <div className={style.jobOpeningBoardWrap}>
        <div className={style.jobOpeningBoard}>
          {jobOpenings.map((data, index) => (
            <JobOpeningBoardContent
              companyName={data.companyName}
              deadline={data.deadline}
              title={data.title}
              id={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default JobOpeningBoard;
