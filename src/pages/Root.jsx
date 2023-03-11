import { Button } from '@mui/material';
import styleFunctionSx from '@mui/system/styleFunctionSx';
import { Link } from 'react-router-dom';

import styles from './root.module.css';

export default function Root() {
  return (
    <div>
      <nav>
        <div className={`container ${styles['nav-container']}`}>
          <span className={styles['nav-span']}>Organizados</span>
          <Link to="/login">
            <Button variant="contained" sx={{ borderRadius: 100, minWidth: 204 }}>
              Login
            </Button>
          </Link>
        </div>
      </nav>
      <main className={`container ${styles['main-container']}`}>
        <img className={styles['main-img']} src="./src/assets/banner.png" />
        <div className={styles['main-container-div']}>
          <h1>Organizados</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames platea malesuada duis et
            consequat fames. Iaculis vitae eu ac a morbi faucibus erat donec.
          </p>
          <Link to="/register" style={{ alignSelf: 'center', marginTop: '50px' }}>
            <Button
              className={styles['main-container-button']}
              variant="contained"
              sx={{ borderRadius: 100, minWidth: 204 }}>
              Registro
            </Button>
          </Link>
        </div>
      </main>
      <section className={styles.section}>
        <div className={`${styles.container} ${styles['section-container']}`}>
          <h2 className={styles['section-title']}>Descárgalo en tu dispositivo</h2>
          <p className={styles['section-text']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames platea malesuada duis et
            consequat fames. Iaculis vitae eu ac a morbi faucibus erat donec.
          </p>
          <div className={styles['section-img-container']}>
            <img src="./src/assets/mockup-1.png" alt="mockup-1" />
            <img src="./src/assets/mockup-2.png" alt="mockup-2" />
          </div>
        </div>
      </section>
    </div>
  );
}
