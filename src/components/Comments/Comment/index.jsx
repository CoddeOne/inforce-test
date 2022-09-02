import React, { memo } from 'react';

import './index.css';

const Comment = ({ comment }) => (
    <div className="Comment">
        {comment.description}
        <small>{new Date(comment.date).toDateString()}</small>
    </div>
);

export default memo(Comment);
