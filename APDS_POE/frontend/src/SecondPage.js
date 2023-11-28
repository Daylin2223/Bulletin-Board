// SecondPage.js
import React from 'react';
import UserPosts from './UserPosts'; // Import the UserPosts component
import './UserPosts.css'; // Import the CSS for the UserPosts component

function SecondPage() {
  return (
    <div className="second-page-container">
      <h2 className="second-page-title">Second Page</h2>
      <p>This is the second page content with separate styling.</p>
      <UserPosts /> {/* Display the UserPosts component on the Second Page */}
    </div>
  );
}

export default SecondPage;
