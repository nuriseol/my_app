import axios from "axios";

/**
 * @name 공통API 호출 유틸
 */
const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

// 요청 인터셉터
api.interceptors.request.use(
  async (config) => {
    console.log(`요청 보내기 전: ${process.env.REACT_APP_API}`);
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
api.interceptors.response.use(
  async (config) => {
    console.log("응답 받은 후");
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default api;
