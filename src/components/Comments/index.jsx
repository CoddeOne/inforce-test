import React from 'react';

import Comment from './Comment';
import './index.css';

const Comments = ({ comments }) => {
    if (!comments?.length) {
        return <p>Co comments here yet...</p>;
    }

    return (
        <div className="Comments">
            {comments.map(comment => (
                <Comment
                    key={comment.id}
                    comment={comment}
                />
            ))}
        </div>
    )
}

export default Comments;
