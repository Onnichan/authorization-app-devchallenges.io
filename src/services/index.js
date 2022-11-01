/* eslint-disable import/prefer-default-export */
import axios from "axios";

const URL_BASE_API = "http://localhost:4000/api/v1";

export const ApiRequest = axios.create({
  baseURL: URL_BASE_API,
  headers: { "Content-Type": "application/json" },
});

const validResponseFormat = /[2]\d\d/;

ApiRequest.interceptors.response.use((response, error) => {
  if (!validResponseFormat.test(response.status)) {
    return Promise.reject(error);
  }
  return response.data;
});
