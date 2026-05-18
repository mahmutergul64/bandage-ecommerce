import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://bandage-backend-2.onrender.com',
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); 
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
}, (error) => {
  return Promise.reject(error);
});