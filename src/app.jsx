import React, { useEffect, useState } from 'react';
import BoardRegisterModal from './component/board_register_modal/board_register_modal';
import Header from './component/header/header';
import Main from './component/main/main';
import style from './app.module.css';

const App = ({ authService }) => {
  const loginState = authService.login();
  const [boardInfo, setBoardInfo] = useState([
    {
      id: 1,
      company: '카카오',
      startDate: '20210401',
      endDate: '20210425',
    },
    {
      id: 2,
      company: '네이버',
      startDate: '20210322',
      endDate: '20210425',
    },
    {
      id: 3,
      company: '라인',
      startDate: '20210324',
      endDate: '20210425',
    },
    {
      id: 4,
      company: '배민',
      startDate: '20210325',
      endDate: '20210425',
    },
  ]);
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };
  const openModal = () => {
    setModalVisible(true);
  };
  const sendBoardData = (e) => {
    console.log(e);
    console.log('dataSend');
  };

  return (
    <>
      <Header loginState={loginState} />
      <Main boardInfo={boardInfo} openModal={openModal} />
      {modalVisible && (
        <div className={style.modalOverlay} onClick={closeModal}></div>
      )}
      {modalVisible && (
        <BoardRegisterModal
          closeModal={closeModal}
          sendBoardData={sendBoardData}
        />
      )}
    </>
  );
};

export default App;
