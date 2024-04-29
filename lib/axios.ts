import axios from "axios";
const accessToken = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

  export const axiosPexelsInstance = axios.create({
    baseURL: 'https://api.pexels.com/v1',
    headers: {
      accept: 'application/json',
      Authorization: accessToken,
    },
  });