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
      <ul className={styles.navbar}>
        <li className={styles.navbarLink}>기업</li>
        <li className={styles.navbarLink}>공고</li>
      </ul>
      <button type="button" className={styles.loginButton}>
        {loginText}
      </button>
    </header>
  );
};

export default Header;
