import React, { useEffect, useState } from 'react';
import Header from './component/header/header';
import Main from './component/main/main';

const App = ({
  authService,
  getCalendarInfo,
  sendSearchData,
  getBoardInfo,
}) => {
  const loginState = authService.login();
  const calendarInfo = getCalendarInfo.getInfo();

  const [boardCotent, setBoardContent] = useState([]);
  useEffect(() => {
    getBoardInfo.getInfo().then((data) => setBoardContent(data));
  }, [getBoardInfo]);
  console.log(boardCotent);

  return (
    <>
      <Header loginState={loginState} />
      <Main
        calendarInfo={calendarInfo}
        sendSearchData={sendSearchData}
        boardCotent={boardCotent}
      />
    </>
  );
};

export default App;
