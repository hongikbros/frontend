import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header';
import Main from './component/main';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>,
  document.getElementById('root'),
);
