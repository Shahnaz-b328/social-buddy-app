import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const {id, title} = props.post;
    const history = useHistory();
    const handelClick = (id) => {
        const url = `/post/${id}`;
        history.push(url);
    }
    return (
        <div>
            <h1>{id}</h1>
            <p>Title: {title}</p>
            <button onClick={() => handelClick(id)}>Comments Detail</button>
        </div>
    );
};

export default Post;