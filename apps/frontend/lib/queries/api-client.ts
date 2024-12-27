import axios from 'axios';

// Create an Axios instance
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5001',
  timeout: 10000, // Timeout in ms
  headers: {
    'Content-Type': 'application/json', // Default content type
  },
});

// TODO: Add a request interceptor
// apiClient.interceptors.request.use(
//   (config) => {
//     // Example: Add auth token to every request if available
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// apiClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Handle errors globally
//     if (error.response) {
//       console.error(`API Error: ${error.response.status} - ${error.response.data.message}`);
//     } else {
//       console.error('Network Error:', error.message);
//     }
//     return Promise.reject(error);
//   }
// );

export default apiClient;
