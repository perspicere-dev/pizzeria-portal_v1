import React from 'react';
import styles from './Login.module.scss';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  
  const navigate = useNavigate();

  return (
    <div className={styles.component}>
      <h2>Login</h2>
      <Box 
        className={styles.box}
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'
      >
        <TextField id='outlined-basic' label='Id' variant='outlined' />
        <TextField id='filled-basic' label='Password' variant='outlined' />
        <Button 
          variant='outlined'
          onClick={() => navigate('/panel', { replace: true })}
        >LogIn
        </Button>      
      </Box>
    </div>
    
  );
};

export default Login;