import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Context
import UserContext from '../../contexts/UserContext';

export default function Home () {
    const user = useContext(UserContext);
    
    return(
        <div className='home-wrapper'>
            <div className='home-title'>
                <h1>Welcome, {user.username}!</h1>
            </div>
            <div className='home-details'>
                <h3>For full access to the posts, please LogIn.</h3>
                    <button><Link to='/Login'>Log In</Link></button>
                <h4>If you don´t have an account, you can register now for free!</h4>
                    <button><Link to='/Register'>Register</Link></button>
            </div>
        </div>
    )
}