import React from "react";

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
      <table className="comments-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Comentario</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr key={comment.id} className="comment-row">
              <td className="comment-name">{comment.name}</td>
              <td className="comment-email">{comment.email}</td>
              <td className="comment-body">{comment.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommentList;
