import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 1000,
});

const success = (response) => {
  return response;
};

const wrong = (error) => {
  return error;
};

instance.interceptors.request.use(success, error);

export default instance;