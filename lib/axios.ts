import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
      accept: 'application/json',
    },
  });