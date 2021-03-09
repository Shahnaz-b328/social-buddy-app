import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CommentDetail from '../CommentDetail/CommentDetail';

const Comments = (props) => {
    const {userId} = useParams();
    const [post, setPost] = useState({});
    const [comment, setComment] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${userId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    },[])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${userId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    },[])
    return (
        <div>
            <h1>this is id: {userId}</h1>
            <h2>Title: {post.title}</h2>
            <p>Comment: {post.body}</p>
            <p>Comment length: {comment.length}</p>
            {
                comment.map(comment => <CommentDetail comment={comment}></CommentDetail>)
            }
        </div>
    );
};

export default Comments;