
import React from 'react';
import CreatePost from './CreatePost'; // Import the CreatePost component
import DeletePost from './DeletePost'; // Import the DeletePost component

const UserPostsPage = () => {
  return (
    <div>
      <h2>User Posts</h2>
      <CreatePost />
      <DeletePost />
    </div>
  );
};

export default UserPostsPage;
