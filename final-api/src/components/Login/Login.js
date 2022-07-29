import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';

//Services
import { getUser, getUsers} from '../../services/UserServices';

//Validator
import { loginValidator } from './LoginValidator';

export default function Login() {
    const [email, setEmail]         = useState('');
    const [password, setPassword]   = useState('');
    const [userFound, setUserFound] = useState(false);

    const user = {
        email,
        password,
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await getUsers();
        try {
            loginValidator(user, data);
            const userFound = await getUser(user.email);
            const name = await userFound[0].username;
            alert(`Login successful, welcome ${name}.`);
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
                <button type='submit'>Log In</button>
                <button type='button'><Link to='/'>Back</Link></button>
            </form>
            {userFound && <Navigate to='/AllPosts' replace/>}
        </div>
    )
}