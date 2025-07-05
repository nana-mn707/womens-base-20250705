import { useState, useEffect } from 'react';
import { Play, Info } from 'lucide-react';
import './HeroSection.css';

const HeroSection = ({ movies }) => {
  const [currentMovie, setCurrentMovie] = useState(null);

  useEffect(() => {
    if (movies && movies.length > 0) {
      // 人気度の高い映画を選択
      const popularMovie = movies.find(movie => movie.vote_average > 7) || movies[0];
      setCurrentMovie(popularMovie);
    }
  }, [movies]);

  if (!currentMovie) {
    return <div className="hero-loading">読み込み中...</div>;
  }

  const imageBaseUrl = 'https://image.tmdb.org/t/p/original';
  const backdropPath = currentMovie.backdrop_path;

  return (
    <div className="hero-section">
      <div 
        className="hero-background"
        style={{
          backgroundImage: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 0.3) 50%,
            rgba(0, 0, 0, 0.8) 100%
          ), url(${imageBaseUrl}${backdropPath})`
        }}
      >
        <div className="hero-content">
          <div className="hero-info">
            <h1 className="hero-title">
              {currentMovie.title || currentMovie.name}
            </h1>
            
            <div className="hero-meta">
              <span className="hero-rating">
                {currentMovie.vote_average?.toFixed(1) || 'N/A'} 評価
              </span>
              <span className="hero-year">
                {currentMovie.release_date?.split('-')[0] || currentMovie.first_air_date?.split('-')[0] || 'N/A'}
              </span>
              <span className="hero-duration">2時間15分</span>
              <span className="hero-quality">4K Ultra HD</span>
            </div>
            
            <p className="hero-description">
              {currentMovie.overview?.substring(0, 200)}...
            </p>
            
            <div className="hero-actions">
              <button className="hero-btn play-btn">
                <Play size={20} />
                再生
              </button>
              <button className="hero-btn info-btn">
                <Info size={20} />
                詳細情報
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 
