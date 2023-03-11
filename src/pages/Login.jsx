import { Button, TextField, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

import styles from './register.module.css';

export default function Login() {
  return (
    <>
      <Navbar title="Login" />
      <main>
        <div className={styles['main-container']}>
          <TextField
            required
            id="outlined-required"
            label="Nombre de usuario"
            placeholder="Nombre de usuario"
            margin="normal"
          />
          <TextField
            required
            id="outlined-required"
            label="Contraseña"
            placeholder="Contraseña"
            margin="normal"
          />
          <Link to="/dashboard" style={{ alignSelf: 'center' }}>
            <Button variant="contained" sx={{ borderRadius: 100, minWidth: 204, marginTop: 3 }}>
              Enviar
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
}
