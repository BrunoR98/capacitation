import React, { useState, useContext } from 'react';
import { Navigate, Link } from 'react-router-dom';

//Styles
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import ReplyAllOutlinedIcon from '@mui/icons-material/ReplyAllOutlined';

//Services
import { getUser} from '../../services/UserServices';

//Validator
import { loginValidator } from './LoginValidator';

//Context
import UserContext from '../../contexts/UserContext';

export default function Login() {
    const [email, setEmail]         = useState('');
    const [password, setPassword]   = useState('');
    const [userFound, setUserFound] = useState(false);
    const userContext = useContext(UserContext);

    const user = {
        email,
        password,
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userDB = await getUser(user.email);
        try {
            loginValidator(userDB, user.password);
            userContext.setUserLogin(userDB[0].username);
            alert(`Login successful, welcome ${userDB[0].username}.`);
            setUserFound(true);
        } catch (e) {
            alert(e.message);
            return;
        }
        setEmail('');
        setPassword('');
    }

    return(
        <div className='login-wrapper'>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor='email'>
                        <TextField
                            helperText='Please enter your email'
                            label='Email'
                            variant='filled'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </label>
                    <br />
                    <label htmlFor='password'>
                        <TextField
                            helperText='Please enter your password'
                            label='Password'
                            variant='filled' 
                            color='warning'
                            type='password'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </label>
                </fieldset>
                <IconButton aria-label="login" color="success" type='submit'>
                    <Fingerprint fontSize='large'/>Log In
                </IconButton>
                <Link to='/'>
                    <IconButton aria-label="back" type='button'>
                        <ReplyAllOutlinedIcon fontSize='large'/>
                    </IconButton>
                </Link>
            </form>
            {userFound && <Navigate to='/AllPosts' replace/>}
        </div>
    )
}