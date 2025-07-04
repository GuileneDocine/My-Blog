import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  const post = { title: `Post ${id}`, content: `Content of post ${id}` }; // Mocked post data

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link to="/">Back to Home</Link>
      <Link to={`/edit/${id}`}>Edit Post</Link>
    </div>
  );
};

export default Post;