import React, { Component } from 'react';
import '../css/board_detail.css';

class BoardDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'demo-title',
      techStack: ['tech1', 'tech2', 'tech3'],
      bussinessInfo: 'good, cool',
      prefentialTreatment: 'I want good man',
    };
  }

  render() {
    const { title, techStack, bussinessInfo, prefentialTreatment } = this.state;

    return (
      <div className="board-detail-container">
        <div className="board-detail-header">
          <button type="button" className="enlarge-button">
            확대
          </button>
          <div>
            <button type="button" className="bookmark-check-button">
              북마크
            </button>
            <button type="button" className="board-detail-close-button">
              닫기
            </button>
          </div>
        </div>
        <div className="board-detail-main">
          <div className="board-detail__main-header">
            <img src={searchIcon} alt="company-icon" className="company-icon" />
            <div className="header-content">
              <span className="board-title">{title}</span>
              <div className="tech-stack">{techStack.map((data) => data)}</div>
            </div>
          </div>
          <div className="board-detail__main-content">
            <div className="business-info">{bussinessInfo}</div>
            <div className="prefential-treatment">{prefentialTreatment}</div>
          </div>
        </div>
        <div className="board-detail-footer">
          <button type="button" className="return-button">
            뒤로 가기
          </button>
        </div>
      </div>
    );
  }
}

export default BoardDetail;
