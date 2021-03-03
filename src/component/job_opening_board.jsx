import React, { Component } from 'react';
import JobOpeningBoardContent from './job_opening_board_content';
import style from '../css/job_opening_board.module.css';
import BoardDetail from './board_detail';

class JobOpeningBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobOpenings: [
        {
          companyName: 'KaKao',
          deadline: '20200205',
          title: '프론트 급구',
          id: 1,
        },
        {
          companyName: 'Samsung',
          deadline: '20200221',
          title: '백 급구',
          id: 2,
        },
        {
          companyName: 'Facebook',
          deadline: '20200301',
          title: '네트워크 급구',
          id: 3,
        },
      ],
      modal: false,
    };
  }

  openModal = () => {
    let { modal } = this.state;
    console.log(modal);
    modal = !modal;
    this.setState({ modal });
  };

  render() {
    const { jobOpenings } = { ...this.state };
    const { modal } = { ...this.state };
    return (
      <>
        <div className={style.jobOpeningBoardWrap}>
          <div className={style.jobOpeningBoard}>
            {jobOpenings.map((data) => (
              <JobOpeningBoardContent
                companyName={data.companyName}
                deadline={data.deadline}
                title={data.title}
                id={data.id}
                openModal={this.openModal}
              />
            ))}
          </div>
        </div>
        <BoardDetail modal={modal} />
      </>
    );
  }
}

export default JobOpeningBoard;
