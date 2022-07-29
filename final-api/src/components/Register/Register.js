import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';

//Styles
import './Register.css'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton';
import ReplyAllOutlinedIcon from '@mui/icons-material/ReplyAllOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';

//Services
import { setUser, getUsers } from '../../services/UserServices';

//Validator
import RegisterValidator from './RegisterValidator';

export default function Register() {
    const [redirect, setRedirect]           = useState(false);
    const [errorRedirect, setErrorRedirect] = useState(false);

    const [username, setUsername]   = useState('');
    const [email, setEmail]         = useState('');
    const [password, setPassword]   = useState('');

    const user = {
        username,
        email,
        password
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await getUsers();
        try{
            RegisterValidator(user, data);
            await setUser(user);
            setRedirect(true);
            alert('Registration successful, please LogIn.');
        } catch (e) {
            alert(e.message);
            setErrorRedirect(true);
            return;
        }
        setUsername('');
        setEmail('');
        setPassword('');
    }
    
    return( 
        <div className='register-wrapper'>
            <form onSubmit={handleSubmit}>
                <fieldset style={{border: 'none', borderBottom: '1px solid black'}}>
                    <label htmlFor='username'>
                        <p>Username</p>
                        <TextField
                            helperText='Please enter your username'
                            type='text'
                            label='Username'
                            variant='filled'
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                        />
                    </label>
                    <label htmlFor='email'>
                        <p>Email</p>
                        <TextField
                            helperText='Please enter your email'
                            type='email'
                            label='Email'
                            variant='filled'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </label>
                    <label htmlFor='password'>
                        <p>Password</p>
                        <TextField
                            helperText='Please enter your password'
                            type='password'
                            label='Password'
                            color='warning'
                            variant='filled'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </label>
                </fieldset>
                <div className='register-btn'>
                    <IconButton aria-label="login" color="success" type='submit'>
                        <HowToRegOutlinedIcon fontSize='large'/>Register
                    </IconButton>
                    <Link to='/'>
                        <IconButton aria-label="back" type='button'>
                            <ReplyAllOutlinedIcon fontSize='large'/>
                        </IconButton>
                    </Link>
                </div>
            </form>
            {redirect && <Navigate to='/login' replace/>}
            {errorRedirect && <Navigate to='/' replace/>}
        </div>
    )
}