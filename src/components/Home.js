import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const mockPosts = [
      { id: 1, title: 'First Post', content: 'This is my first blog post!' },
      { id: 2, title: 'Second Post', content: 'This is my second blog post!' },
    ];
    setPosts(mockPosts);
  }, []);

  return (
    <div className="container">
      <h1>My Blog</h1>
      <Link to="/create">Create New Post</Link>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;