import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';
import AuthService from './services/auth_service';

const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById('root'),
);
