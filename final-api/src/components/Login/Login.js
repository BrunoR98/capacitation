import React, { useState } from "react";
import { Navigate } from "react-router-dom";

//Services
import { getUsers} from "../../services/UserServices";

//Validator
import { loginValidator } from "./LoginValidator";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userFound, setUserFound] = useState(false);

    const user = {
        email,
        password,
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await getUsers();
        const found = loginValidator(user, data);
        if (found){
            console.log('user found')
            setUserFound(true);
        } else {
            console.log('user not found')
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
            </form>
            {userFound && <Navigate to='/AllPosts' replace/>}
        </div>
    )
}