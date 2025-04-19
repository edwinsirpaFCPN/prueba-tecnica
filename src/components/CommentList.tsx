import React from 'react';

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

interface Props {
  comments: Comment[];
}

const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="comment-content">
      {comments.map((comment) => (
        <div key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.email}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;