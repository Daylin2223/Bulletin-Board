import React, { useEffect, useState } from 'react';
import { getAllUserPosts, deleteUserPost } from '../services/api';

const PostList = ({ authToken }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (authToken) {
      getAllUserPosts(authToken)
        .then((response) => {
          setPosts(response.data.userposts);
        })
        .catch((error) => {
          console.error('Error fetching posts', error);
        });
    }
  }, [authToken]);

  const handleDeletePost = (postId) => {
    deleteUserPost(postId, authToken)
      .then(() => {
        // Handle success
        console.log('Post deleted successfully');
        // You can also remove the deleted post from the state here if needed.
      })
      .catch((error) => {
        // Handle errors
        console.error('Error deleting post', error);
      });
  };

  return (
    <div>
      <h2>Post List</h2>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.name}</h3>
          <button onClick={() => handleDeletePost(post._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
