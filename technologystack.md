# 技術スタック

## コア技術
- JavaScript (ES6+)
- Node.js: ^20.0.0  

## フロントエンド
- React: ^19.1.0
- React DOM: ^19.1.0
- Vite: ^6.0.0
- React Router DOM: ^7.6.3
- CSS (Vanilla CSS)

## API・データ取得
- Axios: ^1.10.0
- TMDB API (映画データベース)

## 開発ツール
- npm: ^10.0.0
- ESLint: ^9.29.0
- Vite Plugin React: ^4.5.2
- Vite (開発サーバー・ビルドツール)

## 開発サポート
- React Types: ^19.1.8
- React DOM Types: ^19.1.6
- ESLint Plugins:
  - React Hooks: ^5.2.0
  - React Refresh: ^0.4.20
- Globals: ^16.2.0

---

# API バージョン管理
## 重要な制約事項
- APIクライアントは `api/tmdb.js` で一元管理
- 映画データの取得はTMDB APIを使用
- これらのファイルは変更禁止（変更が必要な場合は承認が必要）：
  - `api/tmdb.js` - TMDB API設定の中核
  - コンポーネント設計の一元管理
  - 環境設定の一元管理

## 実装規則
- 映画データの取得は `api/tmdb.js` でのみ定義
- コンポーネントは適切な責務分離を維持
- 環境変数の利用は適切に管理
- React 19の新機能を活用した効率的な実装
