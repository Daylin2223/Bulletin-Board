import React, { useState } from 'react';
import { createUserPost } from '../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ authToken }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [idError, setIdError] = useState('');
  const [nameError, setNameError] = useState('');
  const navigate = useNavigate();

  const handleCreatePost = () => {
    // Input validation for empty fields
    if (!id.trim() || !name.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    const postData = {
      id: id,
      name: name,
    };

    createUserPost(postData, authToken)
      .then((response) => {
        console.log('Post created successfully', response.data);
        toast.success('Post created successfully');
        navigate('/deletepost'); // Redirect to the delete post page
      })
      .catch((error) => {
        console.error('Error creating post', error);
        toast.error('Error creating post');
      });
  };

  const createPostStyles = {
    container: {
      textAlign: 'center',
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      marginTop: '40px',
    },
    h2: {
      color: '#333',
      fontSize: '1.5rem',
      marginBottom: '20px',
    },
    inputContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '20px',
    },
    inputText: {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    errorText: {
      color: 'red',
      marginBottom: '10px',
    },
    createButton: {
      backgroundColor: '#007BFF',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginRight: '10px',
    },
    createButtonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={createPostStyles.container}>
      <h2 style={createPostStyles.h2}>Create Post</h2>
      <div style={createPostStyles.inputContainer}>
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
            setIdError(e.target.value.trim() ? '' : 'ID is required');
          }}
          style={createPostStyles.inputText}
        />
        {idError && <div style={createPostStyles.errorText}>{idError}</div>}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setNameError(e.target.value.trim() ? '' : 'Name is required');
          }}
          style={createPostStyles.inputText}
        />
        {nameError && <div style={createPostStyles.errorText}>{nameError}</div>}
      </div>
      <button
        onClick={() => navigate('/dashboard')}
        style={createPostStyles.createButton}
      >
        Go to Dashboard
      </button>
      <button
        onClick={handleCreatePost}
        style={createPostStyles.createButton}
      >
        Create
      </button>
      <button
        style={createPostStyles.createButton}
        onClick={() => navigate('/deletepost')}
      >
        Go to View Post
      </button>
    </div>
  );
};

export default CreatePost;
