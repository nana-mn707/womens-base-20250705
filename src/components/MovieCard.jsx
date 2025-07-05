import { useState } from 'react';
import { Play, Plus, Check, ThumbsUp, Volume2, VolumeX } from 'lucide-react';
import useFavorites from '../hooks/useFavorites';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
  const posterPath = movie.poster_path || movie.backdrop_path;

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const handleFavorite = (e) => {
    e.stopPropagation();
    if (isFavorite(movie.id)) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <div 
      className="movie-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="movie-poster">
        <img 
          src={`${imageBaseUrl}${posterPath}`}
          alt={movie.title || movie.name}
          className="poster-image"
        />
        
        {isHovered && (
          <div className="movie-overlay">
            <div className="overlay-content">
              <div className="overlay-header">
                <h3 className="movie-title">
                  {movie.title || movie.name}
                </h3>
                <div className="movie-rating">
                  <span className="rating-text">
                    {movie.vote_average?.toFixed(1) || 'N/A'}
                  </span>
                </div>
              </div>
              
              <div className="overlay-actions">
                <button className="action-btn play-btn">
                  <Play size={16} />
                  再生
                </button>
                <button className="action-btn" onClick={handleFavorite}>
                  {isFavorite(movie.id) ? <Check size={16} /> : <Plus size={16} />}
                </button>
                <button className="action-btn">
                  <ThumbsUp size={16} />
                </button>
                <button className="action-btn" onClick={toggleMute}>
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
              </div>
              
              <div className="movie-info">
                <div className="movie-meta">
                  <span className="match-percentage">98% マッチ</span>
                  <span className="duration">
                    {movie.release_date?.split('-')[0] || movie.first_air_date?.split('-')[0] || 'N/A'}
                  </span>
                  <span className="rating-badge">TV-MA</span>
                </div>
                <p className="movie-description">
                  {movie.overview?.substring(0, 100)}...
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard; 
