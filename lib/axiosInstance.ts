import axios from "axios";

const headers = {
  "Content-Type": "multipart/form-data",
  "Cache-Control": "no-cache",
};

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000,
  headers,
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Response error:", error.response);
    return Promise.reject(error);
  }
);

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

export default instance;
