import axios from 'axios';

const API_URL = 'http://localhost:3001/api'; // Replace with your actual backend URL

// API calls for user-related endpoints

const registerUser = (userData) => {
  return axios.post(`${API_URL}/users/signup`, userData);
};

const loginUser = (credentials) => {
  return axios.post(`${API_URL}/users/login`, credentials);
};

// API calls for user post-related endpoints

const createUserPost = (postData, token) => {
  return axios.post(`${API_URL}/userposts`, postData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const deleteUserPost = (postId, token) => {
  return axios.delete(`${API_URL}/userposts/${postId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const getAllUserPosts = (token) => {
  return axios.get(`${API_URL}/userposts/all`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export {
  registerUser,
  loginUser,
  createUserPost,
  deleteUserPost,
  getAllUserPosts,
};
