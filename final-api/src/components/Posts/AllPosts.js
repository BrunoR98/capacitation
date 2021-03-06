import React, { useEffect, useReducer, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

//Styles
import './Posts.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';

//Components
import Post from './Post';

//Services
import { getPosts } from '../../services/PostServices';

//Context
import UserContext from '../../contexts/UserContext';

function reducer(state, item) {
    return [...state, item];
}

export default function AllPosts() {
    const [allPosts, setAllPosts]   = useReducer(reducer, []);
    const [loading, setLoading]     = useState(true);
    const userContext = useContext(UserContext);

    useEffect(() => {
        const response = getPosts();
        response.then(data => {
            for(let post of data) {
                setAllPosts(post);
            }
            setLoading(false);
        });
    }, [])
    
    if(loading) {
        return <h1>Loading all posts...</h1>
    }
    
    return(
        <div className='all-posts-wrapper'>
            <div className='all-post-header'>
                <h3><AccountCircleIcon sx={{fontSize: '25px'}}/> {userContext.userLogin}</h3>
            <Link to='/CreatePost' style={{ textDecoration: 'none', marginRight: '5px' }}>
                <Button 
                    variant='contained' 
                    startIcon={<AddCircleOutlineIcon/>}>
                    New post
                </Button>
            </Link>
            <Link to='/' style={{textDecoration: 'none'}}> 
                <Button 
                    variant='contained' 
                    color='warning' 
                    onClick={() => {userContext.logOut()}} 
                    startIcon={<LogoutIcon/>}>
                    Log Out
                </Button>
            </Link>
            </div>
            <ul>
            {allPosts.map(post => (
                <li key={post.id}>
                    <Post
                        id={post.id} 
                        title={post.title}
                        content={post.content}
                    />
                </li>    
            ))}
            </ul>
        </div>
    )
}