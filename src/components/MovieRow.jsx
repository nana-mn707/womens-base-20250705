import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';
import './MovieRow.css';

const MovieRow = ({ title, movies }) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const rowRef = useRef(null);

  const scroll = (direction) => {
    const container = rowRef.current;
    if (!container) return;

    const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const container = rowRef.current;
    if (!container) return;

    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  return (
    <div className="movie-row">
      <h2 className="row-title">{title}</h2>
      
      <div className="row-container">
        {showLeftArrow && (
          <button 
            className="scroll-arrow left-arrow"
            onClick={() => scroll('left')}
          >
            <ChevronLeft size={24} />
          </button>
        )}
        
        <div 
          className="movies-container"
          ref={rowRef}
          onScroll={handleScroll}
        >
          {movies?.map((movie) => (
            <div key={movie.id} className="movie-item">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
        
        {showRightArrow && (
          <button 
            className="scroll-arrow right-arrow"
            onClick={() => scroll('right')}
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieRow; 
