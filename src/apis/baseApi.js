import axios from 'axios';

const _axios = axios.create({
  baseURL: 'http://image.baidu.com',
  timeout: 1000,
});

_axios.interceptors.request.use((config) => config, error => Promise.reject(error));

_axios.interceptors.response.use((response) => {
  return response;
}, error => {
  return Promise.reject(error)
});


export default _axios;