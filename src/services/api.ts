import axios, { AxiosInstance } from 'axios';

const url = 'http://localhost:3333/v1';

export const api: AxiosInstance = axios.create({
  baseURL: url,
  validateStatus: status => {
    return status >= 200 && status < 400;
  },
});

export const setAccessToken = (accessToken: string): void => {
  api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};
