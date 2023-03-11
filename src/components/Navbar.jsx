import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

function Navbar({ title, authenticated }) {
  return (
    <nav
      className={styles.nav}
      style={{
        backgroundColor: `${authenticated ? 'var(--lightest-blue)' : 'var(--blue)'}`,
        color: `${authenticated ? 'var(--black)' : 'var(--white)'}`
      }}>
      {authenticated ? (
        <div className={`container ${styles['nav-container-auth']}`}>
          <div>
            <img src="./src/assets/nav-logo.png" alt="" />
            <span>Organizados</span>
            <Link to="/dashboard">
              <Button variant="contained" sx={{ borderRadius: 100, minWidth: 120, marginTop: 3 }}>
                Inicio
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="contained" sx={{ borderRadius: 100, minWidth: 120, marginTop: 3 }}>
                Mi cuenta
              </Button>
            </Link>
          </div>
          <Link to="/">
            <Button variant="contained" sx={{ borderRadius: 100, minWidth: 120, marginTop: 3 }}>
              Salir
            </Button>
          </Link>
        </div>
      ) : (
        <div className={`container ${styles['nav-container']}`}>
          <Link to="/">
            <svg className={styles['back-icon']}>
              <use href="./src/assets/icons.svg#back-arrow"></use>
            </svg>
          </Link>
          <span>{title}</span>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
