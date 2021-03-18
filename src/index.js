import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';
import AuthService from './services/auth_service';
import GetBoardInfo from './services/get_board_info';
import GetCalendarInfo from './services/get_calendar_info';
import SendSearchData from './services/send_search_data';

const authService = new AuthService();
const getCalendarInfo = new GetCalendarInfo();
const sendSearchData = new SendSearchData();
const getBoardInfo = new GetBoardInfo();

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      getCalendarInfo={getCalendarInfo}
      sendSearchData={sendSearchData}
      getBoardInfo={getBoardInfo}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
