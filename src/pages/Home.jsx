import { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MovieRow from '../components/MovieRow';
import { getTrending, getPopularMovies, getPopularTV } from '../api/tmdb';
import './Home.css';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTV, setPopularTV] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // 並行してデータを取得
        const [trendingData, moviesData, tvData] = await Promise.all([
          getTrending('all', 'day'),
          getPopularMovies(),
          getPopularTV()
        ]);

        setTrending(trendingData);
        setPopularMovies(moviesData);
        setPopularTV(tvData);
      } catch (error) {
        console.error('データの取得に失敗しました:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>読み込み中...</p>
      </div>
    );
  }

  return (
    <div className="home">
      <Header />
      
      <main className="main-content">
        <HeroSection movies={trending} />
        
        <div className="content-section">
          <MovieRow 
            title="今話題のコンテンツ" 
            movies={trending} 
          />
          
          <MovieRow 
            title="人気の映画" 
            movies={popularMovies} 
          />
          
          <MovieRow 
            title="人気のTV番組" 
            movies={popularTV} 
          />
          
          <MovieRow 
            title="アクション映画" 
            movies={popularMovies.filter(movie => 
              movie.genre_ids?.includes(28)
            )} 
          />
          
          <MovieRow 
            title="コメディ" 
            movies={popularMovies.filter(movie => 
              movie.genre_ids?.includes(35)
            )} 
          />
          
          <MovieRow 
            title="ドラマ" 
            movies={popularMovies.filter(movie => 
              movie.genre_ids?.includes(18)
            )} 
          />
        </div>
      </main>
    </div>
  );
};

export default Home; 
