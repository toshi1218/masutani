# みなと司法書士事務所 - Webサイト

遺産承継、遺言執行、任意後見を扱う司法書士事務所の静的Webサイトです。

## 🎨 デザインコンセプト

**Serene Trust（静謐な信頼）** - 誠実さと安心感を最優先としたデザイン

- **色彩**: 深い濃紺（信頼）+ 純白（清潔感）+ 控えめなゴールド（品格）
- **フォント**: Noto Serif JP（見出し）+ Noto Sans JP（本文）
- **レイアウト**: 非対称グリッド、ゆとりある余白、セクション間の色分け

## 📄 ページ構成（7ページ）

1. **ホーム** (`/`) - ヒーロー、サービス概要、強み、相談の流れ、お知らせ
2. **事務所情報** (`/office`) - 事務所概要、アクセス、方針、プライバシーポリシー
3. **遺産承継業務** (`/services/inheritance-succession`) - 相続手続きの専門ページ
4. **遺言執行業務** (`/services/will-execution`) - 遺言執行の専門ページ
5. **任意後見業務** (`/services/voluntary-guardianship`) - 任意後見の専門ページ
6. **よくあるご質問** (`/faq`) - 15問のFAQ（カテゴリ分け）
7. **お問い合わせ** (`/contact`) - 連絡方法、フォーム

## 🛠 技術スタック

- **フレームワーク**: React 19 + Wouter（ルーティング）
- **スタイリング**: Tailwind CSS 4 + OKLCH色空間
- **UI コンポーネント**: shadcn/ui
- **ビルド**: Vite
- **デプロイ**: Cloudflare Pages（静的ホスティング）

## 📦 セットアップ

### 必要な環境

- Node.js 18+
- pnpm 10+

### インストール

```bash
# リポジトリをクローン
git clone <repository-url>
cd minato-shihoshoshi-office

# 依存パッケージをインストール
pnpm install
```

## 🚀 ローカル開発

```bash
# 開発サーバーを起動
pnpm dev

# ブラウザで http://localhost:5173 にアクセス
```

開発サーバーは自動的にホットリロード対応です。ファイルを保存すると、ブラウザが自動更新されます。

## 🔨 ビルド

```bash
# 本番用にビルド
pnpm build

# ビルド結果は dist/ ディレクトリに出力されます
```

## 📋 プロジェクト構成

```
client/
├── public/              # 静的アセット
│   ├── robots.txt      # SEO設定
│   ├── sitemap.xml     # サイトマップ
│   └── images/         # 画像ファイル
├── src/
│   ├── pages/          # ページコンポーネント
│   │   ├── Home.tsx
│   │   ├── Office.tsx
│   │   ├── InheritanceSuccession.tsx
│   │   ├── WillExecution.tsx
│   │   ├── VoluntaryGuardianship.tsx
│   │   ├── FAQ.tsx
│   │   └── Contact.tsx
│   ├── components/     # 再利用可能なコンポーネント
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── CTASection.tsx
│   │   └── StructuredData.tsx
│   ├── App.tsx         # ルーティング定義
│   ├── main.tsx        # エントリーポイント
│   └── index.css       # グローバルスタイル
└── index.html          # HTMLテンプレート
```

## 🌐 Cloudflare Pagesへのデプロイ

### 1. GitHubにプッシュ

```bash
git add .
git commit -m "Initial commit: Judicial Scrivener Office Website"
git push origin main
```

### 2. Cloudflare Pagesで設定

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) にログイン
2. **Pages** → **Create a project** → **Connect to Git**
3. GitHubリポジトリを選択
4. ビルド設定:
   - **Framework preset**: Vite
   - **Build command**: `pnpm build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`
5. **Save and Deploy**

### 3. カスタムドメイン設定

1. Cloudflare Pages の **Custom domains** タブで、ドメインを追加
2. DNS設定を完了

## 📝 コンテンツ管理

### 事務所情報の更新

以下のファイルで事務所情報を一括管理できます：

- `client/src/components/Header.tsx` - ナビゲーション、連絡先
- `client/src/components/Footer.tsx` - フッター情報
- `client/src/pages/Office.tsx` - 事務所詳細情報

### 料金表の更新

各サービスページ（`InheritanceSuccession.tsx` など）の「費用の目安」セクションを編集してください。

### お知らせの更新

`client/src/pages/Home.tsx` の「お知らせ」セクションを編集してください。

## 🔍 SEO最適化

- **メタタグ**: `client/index.html` で設定
- **構造化データ**: `client/src/components/StructuredData.tsx` で JSON-LD を定義
- **サイトマップ**: `client/public/sitemap.xml`
- **robots.txt**: `client/public/robots.txt`

## ♿ アクセシビリティ

- 見出し階層（h1-h6）を適切に設定
- フォーカス可視化を実装
- コントラスト比を WCAG AA 以上に設定
- セマンティックHTMLを使用

## 📱 レスポンシブ対応

- モバイル優先のデザイン
- ブレークポイント: 640px（sm）, 1024px（lg）
- ハンバーガーメニューはモバイルのみ表示

## 🎯 パフォーマンス

- 静的ホスティングで高速配信
- CSS-in-JS なし（Tailwind CSS）
- 画像最適化（WebP対応）
- キャッシュ戦略（Cloudflare）

## 📧 お問い合わせフォーム

現在、フォーム送信は UI のみ実装されています。本番環境では、以下のいずれかで実装してください：

- **Cloudflare Pages Functions** - サーバーレス関数
- **外部サービス** - Formspree, Netlify Forms など
- **メール送信API** - SendGrid, Mailgun など

## 🔐 セキュリティ

- HTTPS 必須（Cloudflare Pages で自動対応）
- CSP（Content Security Policy）ヘッダー設定推奨
- プライバシーポリシーを `client/src/pages/Office.tsx` に記載

## 📄 ライセンス

MIT License

## 👨‍💼 代表者情報（プレースホルダー）

以下の情報は、実際の値に置き換えてください：

- 事務所名: みなと司法書士事務所
- 代表者: 司法書士 佐藤 健一
- 電話: 03-1234-5678
- メール: info@minato-office.jp
- 住所: 東京都港区赤坂1-1-1
- 受付時間: 平日 9:00-18:00
- 対応エリア: 東京都・神奈川県・千葉県・埼玉県

## 🚀 今後の拡張

- [ ] お問い合わせフォーム送信機能
- [ ] ブログ機能
- [ ] オンライン予約システム
- [ ] 多言語対応
- [ ] ダークモード

## 📞 サポート

ご質問やご不明な点がございましたら、お気軽にお問い合わせください。

---

**最終更新**: 2024年1月15日
