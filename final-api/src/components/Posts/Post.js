import React from 'react';
import PropTypes from 'prop-types';

export default function Post({ id, title, content }) {
    return(
        <>
            <h2>{id}. {title}</h2>
            <p>{content}</p>
        </>
    )
}

Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}