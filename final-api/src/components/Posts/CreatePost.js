import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';

//Services
import { setPost } from '../../services/PostServices';

//Context
import UserContext from '../../contexts/UserContext';

export default function CreatePost () {
    const userContext = useContext(UserContext);

    const [title, setTitle]         = useState('');
    const [content, setContent]     = useState('');
    const [redirect, setRedirect]   = useState(false);

    const post = {
        title, 
        content,
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setPost(post);
        setRedirect(true);
        setTitle('');
        setContent('');
    }

    return(
        <div className='create-post-wrapper'>
            <div>
                <h3> {userContext.userLogin}</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor='title'>
                        <p>Title</p>
                        <input 
                            type='text'
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            placeholder='Title'
                            required
                        />
                    </label>
                    <label htmlFor='content'>
                        <p>Content</p>
                        <textarea
                            type='text'
                            onChange={(e) => setContent(e.target.value)}
                            value={content}
                            placeholder='What are you thinking?...'
                            required
                        />
                    </label>
                </fieldset>
                <button type='submit'>Add Post</button>
            </form>
            {redirect && <Navigate to='/AllPosts' replace/>}
        </div>
    )
}