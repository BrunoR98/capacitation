import React, { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';

//Components
import Post from './Post';

//Services
import { getPosts } from '../../services/PostServices';

function reducer(state, item) {
    return [...state, item];
}

export default function AllPosts() {
    const [allPosts, setAllPosts] = useReducer(reducer, []);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const response = getPosts();
        response.then(data => {
            for(let post of data) {
                setAllPosts(post);
            }
            setLoading(false);
        });
    },[])
    
    if(loading) {
        return <h1>Loading all posts...</h1>
    }

    return(
        <div className='all-posts-wrapper'>
            {<Link to='/CreatePost'><button >Create new post</button></Link>}
            <ul>
            {allPosts.map( post => (
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