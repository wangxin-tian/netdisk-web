import axios from "axios";
import nprogress from 'nprogress'   // 导入 nprogress

const instance = axios.create({
  cancelToken: axios.CancelToken.source().token,
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 1 * 60 * 1000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  }
});

export const requestSourceMap = new Map();

const error = e => {
  nprogress.done();
  if (axios.isCancel(e)) return '';
  throw new Error(e);
};

instance.interceptors.request.use((config) => {
  const source = requestSourceMap.get(config.url || '');
  source && source.cancel();
  const newSouce = axios.CancelToken.source();
  config.cancelToken = newSouce.token;
  requestSourceMap.set(config.url || '', newSouce);
  config.headers = config.headers || {};
  if (config.url?.substring(0,6) === 'images') {
    return config;
  }
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['authorization'] = `Bearer ${token}`;
  }
  nprogress.start();
  return config;
});

instance.interceptors.response.use(({ data }) => {
  nprogress.done();
  if (data.error) {
    throw new Error(data.error);
  }
  return data;
}, error);

export default instance;