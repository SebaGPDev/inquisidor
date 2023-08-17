import axios from 'axios';

export const makePostRequest = async (url, body, headers = {}) => {
  try {
    const response = await axios.post(url, body, { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};
