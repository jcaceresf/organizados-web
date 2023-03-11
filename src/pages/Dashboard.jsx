import { Button, TextField, IconButton } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

import styles from './dashboard.module.css';

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar authenticated />
      <main className={`${styles.main}`}>
        <div className="container">
          <h2>Mis grupos</h2>
          <div className={styles['group-container']}>
            <div className={styles['group-box']}>
              <span>Oficina</span>
              <div>
                <span>25</span>
                <span className={styles['group-prompt']}>Por hacer</span>
              </div>
              <div>
                <span>25</span>
                <span className={styles['group-prompt']}>Completadas</span>
              </div>
            </div>
            <div className={styles['group-box']}>
              <span>Apartamento</span>
              <div>
                <span>0</span>
                <span className={styles['group-prompt']}>Por hacer</span>
              </div>
              <div>
                <span>+99</span>
                <span className={styles['group-prompt']}>Completadas</span>
              </div>
            </div>
            <div className={styles['group-box']}>
              <span>LOS MEJOR...</span>
              <div>
                <span>11</span>
                <span className={styles['group-prompt']}>Por hacer</span>
              </div>
              <div>
                <span>0</span>
                <span className={styles['group-prompt']}>Completadas</span>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./src/assets/download-cta.png"
          alt=""
          className={styles['download-cta']}
        onClick={() => setShowModal((prevState) => !prevState)}
        />
      </main>
      <div className={`${styles.overlay} ${showModal || styles['is-hidden']}`}>
        <div className={styles.modal}>
          <span
            className={styles['close-btn']}
            role="button"
            onClick={() => setShowModal((prevState) => !prevState)}>
            X
          </span>
          <div style={{ display: 'flex' }}>
            <figure>
              <figcaption style={{ textAlign: 'center', marginBottom: '15px' }}>Android</figcaption>
              <img src="./src/assets/qr-1.png" alt="" />
            </figure>
            <figure>
              <figcaption style={{ textAlign: 'center', marginBottom: '15px' }}>iOS</figcaption>
              <img src="./src/assets/qr-2.png" alt="" />
            </figure>
          </div>
          <p style={{ width: '55%', textAlign: 'center' }}>
            Descarga la app aquí para gestionar tus grupos y tareas
          </p>
        </div>
      </div>
    </>
  );
}
