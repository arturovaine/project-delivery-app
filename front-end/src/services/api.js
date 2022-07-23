import axios from 'axios';

const DEFAULT_PORT = 3001;
const API_PORT = process.env.REACT_APP_API_PORT || DEFAULT_PORT;

const api = axios.create({
  baseURL: `http://localhost:${API_PORT}`,
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const postRequest = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);

  return data;
};

export const postCheckout = async (endpoint, body, token) => {
  setToken(token);
  const { data } = await api.post(endpoint, body);
  return data;
};

export const getRequest = async (endpoint, token) => {
  setToken(token);
  const { data } = await api.get(endpoint);

  return data;
};

export default api;
