import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';

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
                <fieldset>
                    <label htmlFor='username'>
                        <p>Username</p>
                        <input 
                            type='text'
                            placeholder='Username'
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                        />
                    </label>
                    <label htmlFor='email'>
                        <p>Email</p>
                        <input 
                            type='email'
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </label>
                    <label htmlFor='password'>
                        <p>Password</p>
                        <input 
                            type='password'
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </label>
                </fieldset>
                <button type='submit'>Register</button>
                <button type='button'><Link to='/'>Back</Link></button>
            </form>
            {redirect && <Navigate to='/login' replace/>}
            {errorRedirect && <Navigate to='/' replace/>}
        </div>
    )
}