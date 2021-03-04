import React from 'react';
import Header from './component/header/header';
import Main from './component/main/main';

const App = ({ authService, getCalendarInfo, sendSearchData }) => {
  const loginState = authService.login();
  const calendarInfo = getCalendarInfo.getInfo();

  return (
    <>
      <Header loginState={loginState} />
      <Main calendarInfo={calendarInfo} sendSearchData={sendSearchData} />
    </>
  );
};

export default App;
