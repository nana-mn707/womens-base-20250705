import useFavorites from '../hooks/useFavorites';
import MovieRow from '../components/MovieRow';
import './MyPage.css';

const USER_NAME = '山田 太郎'; // 仮のユーザー名

const MyPage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="mypage">
      <div className="mypage-header">
        <div className="user-icon">👤</div>
        <div className="user-info">
          <h2 className="user-name">{USER_NAME}</h2>
          <p className="user-label">マイページ</p>
        </div>
      </div>

      <div className="favorites-section">
        <h3 className="section-title">お気に入り映画一覧</h3>
        {favorites.length === 0 ? (
          <p className="no-favorites">お気に入り映画がありません。</p>
        ) : (
          <MovieRow title="" movies={favorites} />
        )}
      </div>
    </div>
  );
};

export default MyPage; 
