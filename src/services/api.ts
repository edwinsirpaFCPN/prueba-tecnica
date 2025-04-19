import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async (page: number, limit: number = 10) => {
  const response = await axios.get(`${API_URL}/posts`, {
    params: { _page: page, _limit: limit },
  });
  return response.data;
};

export const fetchPostComments = async (postId: number) => {
  const response = await axios.get(`${API_URL}/posts/${postId}/comments`);
  return response.data;
};