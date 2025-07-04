import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams();
  const Navigate = useNavigate();
  const [title, setTitle] = useState(`Edit Post ${id}`);
  const [content, setContent] = useState(`Content of post ${id}`); // Mocked data

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally update the post on the server
    console.log('Post Updated:', { title, content });
    Navigate.push(`/post/${id}`);
  };

  return (
    <div>
      <h2>Edit Post {id}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;