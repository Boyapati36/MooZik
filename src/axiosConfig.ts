import axios from 'axios';

const youtubeBaseUrl: string = process.env.REACT_APP_YOUTUBE_API_ENDPOINT as string;

const instance = axios.create({
  baseURL: youtubeBaseUrl,
  timeout: 10000,
  headers: {
    'X-RapidAPI-Host': 'youtube-music4.p.rapidapi.com',
    'X-RapidAPI-Key': '52a5e09850msh5a92b6b72a2dfb7p1c96b4jsnddd3e856976d',
    'content-type': 'application/json'
  }
});

export default instance;
