import React, { useEffect, useState } from 'react';
import Header from './component/header/header';
import Main from './component/main/main';

const App = ({ authService, getCalendarInfo }) => {
  const loginState = authService.login();
  const calendarInfo = getCalendarInfo.getInfo();
  const [boardInfo, setBoardInfo] = useState([
    {
      company: '카카오',
      date: '20210401',
    },
    {
      company: '네이버',
      date: '20210322',
    },
    {
      company: '라인',
      date: '20210324',
    },
    {
      company: '배민',
      date: '20210325',
    },
  ]);

  return (
    <>
      <Header loginState={loginState} />
      <Main boardInfo={boardInfo} />
    </>
  );
};

export default App;
