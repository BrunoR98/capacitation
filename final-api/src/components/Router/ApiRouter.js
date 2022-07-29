import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Context
import UserContext from '../../contexts/UserContext';

//Components
import Login        from '../Login/Login';
import Home         from '../Home/Home';
import Register     from '../Register/Register';
import AllPosts     from '../Posts/AllPosts';
import CreatePost   from '../Posts/CreatePost';
import PageNotFound from '../Errors/PageNotFound';

export default function ApiRouter() {
    const [userLogin, setUserLogin] = useState('Unknown user');

    const setDefaultUser = () => {
        setUserLogin('Unknown user');
    }

    return(
            <Router>
                <UserContext.Provider value={{ userLogin, setUserLogin, setDefaultUser }}>
                    <Routes>
                        <Route exact path='/' element={<Home />}/>
                        <Route exact path='/Login' element={<Login />}/>
                        <Route exact path='/Register' element={<Register />}/>
                        <Route exact path='/AllPosts' element={<AllPosts />}/>
                        <Route exact path='/CreatePost' element={<CreatePost />}/>
                        <Route path='*' element={<PageNotFound />}/>
                    </Routes>
                </UserContext.Provider>
            </Router>
    )
}