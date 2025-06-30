import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

// トレンド（all, movie, tv, person）
export const getTrending = async (mediaType = 'all', timeWindow = 'day') => {
  // mediaType: 'all' | 'movie' | 'tv' | 'person'
  // timeWindow: 'day' | 'week'
  const response = await axios.get(`${BASE_URL}/trending/${mediaType}/${timeWindow}`, {
    params: {
      api_key: API_KEY,
      language: 'ja-JP'
    }
  });
  return response.data.results;
};

// 人気映画一覧
export const getPopularMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
      language: 'ja-JP',
      page: 1
    }
  });
  return response.data.results;
};

// 人気TVシリーズ一覧
export const getPopularTV = async () => {
  const response = await axios.get(`${BASE_URL}/tv/popular`, {
    params: {
      api_key: API_KEY,
      language: 'ja-JP',
      page: 1
    }
  });
  return response.data.results;
};
