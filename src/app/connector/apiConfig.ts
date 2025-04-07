// This is the api config to tunnel to the backend flask REST API

// This is how to import the api config
// import api from '@/services/apiConfig';


import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: 'http://localhost:5000', // Default Flask development server port
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for API calls
api.interceptors.request.use(
  (config: any) => {
    console.log('Making request to:', config.url);
    return config;
  },
  (error: any) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for API calls
api.interceptors.response.use(
  (response: any) => {
    console.log('Received response:', response.status);
    return response;
  },
  (error: any) => {
    console.error('Connection error:', error.message);
    return Promise.reject(error);
  }
);

export default api;


