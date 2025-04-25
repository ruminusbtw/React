import axios from 'axios';

const API_KEY = '755f7937c4824fb6abe82c0b04de2184';

export const fetchArticles = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    );
    return response.data.articles;
  } catch (error) {
    throw error;
  }
};