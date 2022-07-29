import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

//Services
import { setUser } from '../../services/UserServices';

export default function Register() {
    const [redirect, setRedirect] = useState(false);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const user = {
        username,
        email,
        password
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await setUser(user);
        setRedirect(true);
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
            </form>
            {redirect && <Navigate to='/login' replace/>}
        </div>
    )
}