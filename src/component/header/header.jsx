import React from 'react';
import styles from './header.module.css';

const Header = ({ loginState }) => {
  const loginText = loginState ? 'Login' : 'Logout';

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Job <br />
        Manager
      </div>
      <button type="button" className={styles.loginButton}>
        {loginText}
      </button>
    </header>
  );
};

export default Header;
