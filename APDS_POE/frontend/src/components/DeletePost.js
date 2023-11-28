import React, { useState, useEffect } from 'react';
import { deleteUserPost, getAllUserPosts } from '../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const DeletePost = ({ authToken }) => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [userPosts, setUserPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState('');

  useEffect(() => {
    // Fetch user's posts on component mount
    getAllUserPosts(authToken)
      .then((response) => {
        setUserPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user posts', error);
        toast.error('Error fetching user posts');
      });
  }, [authToken]);

  const handleDeletePost = () => {
    // Show the confirmation dialog
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    // User confirmed deletion, proceed with delete
    deleteUserPost(selectedPostId, authToken)
      .then(() => {
        console.log('Post deleted successfully');
        toast.success('Post deleted successfully');
        navigate('/dashboard');
      })
      .catch((error) => {
        console.error('Error deleting post', error);
        toast.error('Error deleting post');
      })
      .finally(() => {
        // Hide the confirmation dialog after the delete operation
        setShowConfirmation(false);
      });
  };

  const cancelDelete = () => {
    // User canceled deletion, hide the confirmation dialog
    setShowConfirmation(false);
  };

  const deletePostStyles = {
    container: {
      textAlign: 'center',
      maxWidth: '600px',
      margin: ' 0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      marginTop: '50px',
    },
    h2: {
      color: '#333',
      fontSize: '1.5rem',
      marginBottom: '20px',
    },
    deleteButton: {
      backgroundColor: '#FF0000', // Changed button color to red for delete
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginRight: '10px', // Added spacing to separate the buttons
    },
    deleteButtonHover: {
      backgroundColor: '#FF3333', // Changed hover color for delete button
    },
    goToDashboardButton: {
      backgroundColor: '#007BFF',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    goToDashboardButtonHover: {
      backgroundColor: '#0056b3',
    },
    goBackToCreatePostButton: {
      backgroundColor: '#007BFF', // Change to blue color
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    goBackToCreatePostButtonHover: {
      backgroundColor: '#0056b3', // Hover color for blue button
    },
    confirmationContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
    },
    confirmationButtons: {
      margin: '0 10px',
    },
    postDropdown: {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
  };

  return (
    <div style={deletePostStyles.container}>
      <h2 style={deletePostStyles.h2}>Delete Post</h2>
      {showConfirmation ? (
        <div style={deletePostStyles.confirmationContainer}>
          <button
            style={{ ...deletePostStyles.deleteButton, ...deletePostStyles.confirmationButtons }}
            onClick={confirmDelete}
          >
            Yes
          </button>
          <button
            style={{ ...deletePostStyles.deleteButton, ...deletePostStyles.confirmationButtons }}
            onClick={cancelDelete}
          >
            No
          </button>
        </div>
      ) : (
        <>
          {Array.isArray(userPosts) && userPosts.length > 0 ? (
            <select
              style={deletePostStyles.postDropdown}
              value={selectedPostId}
              onChange={(e) => setSelectedPostId(e.target.value)}
            >
              <option value="" disabled>
                Select a post to delete
              </option>
              {userPosts.map((post) => (
                <option key={post.id} value={post.id}>
                  {post.name}
                </option>
              ))}
            </select>
          ) : (
            <p>No posts available for deletion.</p>
          )}

          <button
            style={deletePostStyles.goToDashboardButton}
            onClick={() => navigate('/dashboard')}
          >
            Go to Dashboard
          </button>
          <button
            style={deletePostStyles.goBackToCreatePostButton}
            onClick={() => navigate('/createpost')}
          >
            Go Back to Create Post
          </button>
          <button
            style={deletePostStyles.deleteButton}
            onClick={handleDeletePost}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default DeletePost;
