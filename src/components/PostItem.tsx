import React from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Props {
  post: Post;
}

const PostItem: React.FC<Props> = ({ post }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="text-gray-600">{post.body.slice(0, 100)}...</p>
    </div>
  );
};

export default PostItem;