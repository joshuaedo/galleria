import axios from "axios";
const accessToken = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

// export const axiosUnsplashInstance = axios.create({
//     baseURL: 'https://api.unsplash.com',
//     headers: {
//       accept: 'application/json',
//     },
//   });

  export const axiosPexelsInstance = axios.create({
    baseURL: 'https://api.pexels.com/v1',
    headers: {
      accept: 'application/json',
      Authorization: accessToken,
    },
  });