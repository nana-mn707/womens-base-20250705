import { useState } from 'react';
import { Search, Bell, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // スクロール時のヘッダー背景変更
  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-left">
        <div className="logo">
          <h1>NETFLIX</h1>
        </div>
        <nav className="nav-menu">
          <a href="#" className="nav-link active">ホーム</a>
          <a href="#" className="nav-link">TV番組</a>
          <a href="#" className="nav-link">映画</a>
          <a href="#" className="nav-link">新着・人気</a>
          <a href="#" className="nav-link">マイリスト</a>
        </nav>
      </div>
      
      <div className="header-right">
        <div className="search-container">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="タイトル、人物、ジャンルで検索"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="user-menu">
          <Bell className="icon" />
          <Link to="/mypage">
            <User className="icon" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 
