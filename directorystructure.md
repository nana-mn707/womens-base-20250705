# ディレクトリ構成

以下のディレクトリ構造に従って実装を行ってください：

```
/
├── src/                          # アプリケーションソース
│   ├── components/               # Reactコンポーネント（準備済み）
│   ├── context/                  # Reactコンテキスト（準備済み）
│   ├── hooks/                    # カスタムフック（準備済み）
│   ├── styles/                   # CSSファイル（準備済み）
│   ├── App.jsx                   # メインApp
│   ├── App.css                   # App用スタイル
│   ├── main.jsx                  # エントリーポイント
│   └── index.css                 # グローバルスタイル
|   └── api/                      # API関連処理
│      └── tmdb.js                # TMDB API設定
├── public/                       # 静的ファイル
│   └── logo.svg                  # ロゴファイル
├── .cursor/                      # Cursor設定
│   └── rules/                    # CursorRules
│       └── global.mdc            # グローバルルール
├── node_modules/                 # 依存パッケージ
├── .git/                         # Gitリポジトリ
├── package.json                  # プロジェクト設定
├── package-lock.json             # 依存関係ロックファイル
├── vite.config.js                # Vite設定
├── eslint.config.js              # ESLint設定
├── index.html                    # HTML テンプレート
├── technologystack.md            # 技術スタック定義
├── directorystructure.md         # ディレクトリ構成定義
├── README.md                     # プロジェクト説明
└── .gitignore                    # Git除外設定
```

### 配置ルール
- **Reactコンポーネント** → `src/components/`
  - 機能別にファイルを分割
  - 命名規則: PascalCase（例: `MovieCard.jsx`）
- **CSSファイル** → `src/styles/`
  - コンポーネントごとに分離
  - 命名規則: コンポーネント名.css（例: `MovieCard.css`）
- **API処理** → `api/`
  - 外部API接続処理を配置
  - `tmdb.js`は映画データ取得の中核
- **静的ファイル** → `public/`
  - 画像、アイコン、フォントなど
- **コンテキスト** → `src/context/`
  - 状態管理とデータ共有
- **カスタムフック** → `src/hooks/`
  - 再利用可能なロジック

### 実装時の注意事項
1. **`api/tmdb.js`** は映画データ取得の中核となるファイルで、変更禁止
2. 各コンポーネントは責務を分離し、適切な粒度で作成
3. スタイルファイルはコンポーネントごとに分離
4. React 19の新機能を活用した効率的な実装を心がける
5. 環境変数は適切に管理し、セキュリティを確保

### 推奨ファイル構成例
```
src/components/
├── Layout/
│   ├── Header.jsx
│   └── Footer.jsx
├── Movie/
│   ├── MovieCard.jsx
│   ├── MovieList.jsx
│   └── MovieDetail.jsx
└── Common/
    ├── Button.jsx
    └── Modal.jsx

src/styles/
├── Layout/
│   ├── Header.css
│   └── Footer.css
├── Movie/
│   ├── MovieCard.css
│   ├── MovieList.css
│   └── MovieDetail.css
└── Common/
    ├── Button.css
    └── Modal.css
```
