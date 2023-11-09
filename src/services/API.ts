import axios from 'axios'

const getTokenFromLocalStorage = () => {
    return localStorage.getItem('token');
  };
  
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
  });
  
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = getTokenFromLocalStorage();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  export default axiosInstance