import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'favorite_movies';

export default function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie) => {
    if (!favorites.find((m) => m.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFavorite = (movieId) => {
    setFavorites(favorites.filter((m) => m.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some((m) => m.id === movieId);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
} 
