import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Context
import UserContext from '../../contexts/UserContext';

//Components
import Login from '../Login/Login';
import Home from '../Home/Home';
import Register from '../Register/Register';
import AllPosts from '../AllPosts/AllPosts';

export default function Routers() {
    const [username, setUsername] = useState('Unknow User');

    return(
            <Router>
                <UserContext.Provider value={{ username, setUsername }}>
                    <Routes>
                        <Route exact path='/' element={<Home />}/>
                        <Route exact path='/Login' element={<Login />}/>
                        <Route exact path='/Register' element={<Register />}/>
                        <Route exact path='/AllPosts' element={<AllPosts /> }/>
                    </Routes>
                </UserContext.Provider>
            </Router>
    )
}