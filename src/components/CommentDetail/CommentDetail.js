import React from 'react';

const CommentDetail = (props) => {
    const {name, email} = props.comment;
    return (
        <p>
            <h3>Name: {name}</h3>
            <h4>Email:{email}</h4>
        </p>
            
    );
};

export default CommentDetail;