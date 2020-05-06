import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:9000/api/',
});

http.interceptors.response.use(
  r => r.data,
  err => {
    throw err;
  },
);

export const get = (endpoint, params = {}) => http.get(endpoint, { params });

export const post = (endpoint, data = {}, options = {}) => http.post(endpoint, data, options);
