import React, { useState, useContext } from 'react';
import { Navigate, Link } from 'react-router-dom';

//Services
import { getUser, getUsers} from '../../services/UserServices';

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