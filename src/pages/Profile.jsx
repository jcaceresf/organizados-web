import { Button, TextField, IconButton } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

import styles from './profile.module.css';

export default function Profile() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar authenticated />
      <main className={`${styles.main}`}>
        <div className={`container ${styles['profile-container']}`}>
          <div>
            <div style={{ paddingLeft: '36px' }}>
              <img src="./src/assets/profile-picture.png" alt="" />
              <button>
                <svg className={styles['camera-icon']}>
                  <use href="./src/assets/icons.svg#camera-icon" />
                </svg>
              </button>
            </div>
            <div>
              <h2>Nombre de usuario</h2>
              <div className={styles['data-input-box']}>
                <span>USUARIO_10</span>
                <svg className={styles['edit-icon']} onClick={() => setShowModal('username')}>
                  <use href="./src/assets/icons.svg#edit-icon" />
                </svg>
              </div>
            </div>
            <div>
              <h2>Correo electrónico</h2>
              <div className={styles['data-input-box']}>
                <span>TEST@TEST.COM</span>
                <svg className={styles['edit-icon']} onClick={() => setShowModal('email')}>
                  <use href="./src/assets/icons.svg#edit-icon" />
                </svg>
              </div>
            </div>
            <span className={styles.link} onClick={() => setShowModal('password')}>
              cambiar de contraseña
            </span>
          </div>
        </div>
      </main>
      <div className={`${styles.overlay} ${showModal || styles['is-hidden']}`}>
        <div className={styles.modal}>
          <div className={styles['modal-header']}>
            <span className={styles.title}>
              {showModal === 'username'
                ? 'Editar nombre'
                : showModal === 'password'
                ? 'Actualizar contraseña'
                : showModal === 'email'
                ? 'Editar correo'
                : ''}
            </span>
            <span className={styles['close-btn']} role="button" onClick={() => setShowModal(false)}>
              X
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {showModal === 'username' ? (
              <>
                <TextField
                  required
                  id="outlined-required"
                  label="Nombre de usuario"
                  placeholder="Nombre de usuario"
                  margin="normal"
                />

                <Button
                  className={styles['main-container-button']}
                  onClick={() => setShowModal(false)}
                  variant="contained"
                  sx={{ borderRadius: 100, minWidth: 204, marginTop: 3 }}>
                  Actualizar
                </Button>
              </>
            ) : showModal === 'password' ? (
              <>
                <TextField
                  required
                  id="outlined-required"
                  label="Nueva contraseña"
                  placeholder="Nueva contraseña"
                  margin="normal"
                  helperText="*Mínimo 8 caracteres, 1 mayúscula, 1 número y 1 símbolo"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Confirmar contraseña"
                  placeholder="Confirmar contraseña"
                  margin="normal"
                />

                <Button
                  className={styles['main-container-button']}
                  onClick={() => setShowModal(false)}
                  variant="contained"
                  sx={{ borderRadius: 100, minWidth: 204, marginTop: 3 }}>
                  Actualizar
                </Button>
              </>
            ) : showModal === 'email' ? (
              <>
                <TextField
                  required
                  id="outlined-required"
                  label="Correo electrónico"
                  placeholder="Correo electrónico"
                  margin="normal"
                />

                <Button
                  className={styles['main-container-button']}
                  onClick={() => setShowModal(false)}
                  variant="contained"
                  sx={{ borderRadius: 100, minWidth: 204, marginTop: 3 }}>
                  Actualizar
                </Button>
              </>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  );
}
