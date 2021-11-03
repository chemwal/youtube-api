import axios from 'axios';
const KEY = 'AIzaSyDzhRdg4ELBW5iL5CWa9ShSuOZXpBp8vdQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
