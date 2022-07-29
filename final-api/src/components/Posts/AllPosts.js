import React, { useReducer, useState } from 'react';
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
    const [newPost, setNewPost] = useState(false);
    
    const savePosts = async (e) => {
        e.preventDefault();
        const response = await getPosts().then(data => {return data});
        for(let post of response) {
            setAllPosts(post);
        }
        setNewPost(true);
    }

    return(
        <div className='all-posts-wrapper'>
            <h1>All posts</h1>
            {!newPost && <button onClick={savePosts}>Show Posts</button>}
            {newPost && <Link to='/CreatePost'><button >Create new post</button></Link>}
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