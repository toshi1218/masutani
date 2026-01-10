# Cloudflare Pagesへのデプロイ手順

このドキュメントでは、みなと司法書士事務所Webサイトを Cloudflare Pages にデプロイする手順を説明します。

## 前提条件

- GitHub アカウント
- Cloudflare アカウント
- このリポジトリがGitHubにプッシュされている

## デプロイ手順

### ステップ1: GitHubにリポジトリをプッシュ

```bash
git add .
git commit -m "Initial commit: Judicial Scrivener Office Website"
git push origin main
```

### ステップ2: Cloudflare Pagesで新規プロジェクトを作成

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) にログイン
2. 左サイドバーから **Pages** を選択
3. **Create a project** をクリック
4. **Connect to Git** を選択
5. GitHubアカウントを認可し、このリポジトリを選択

### ステップ3: ビルド設定を構成

Cloudflare Pages の設定画面で、以下を入力：

| 項目 | 値 |
|------|-----|
| **Framework preset** | Vite |
| **Build command** | `pnpm build` |
| **Build output directory** | `dist/public` |
| **Root directory** | `/` |

### ステップ4: デプロイ

1. **Save and Deploy** をクリック
2. デプロイが開始されます（通常1～2分）
3. デプロイ完了後、自動生成されたURLでサイトが公開されます

例: `https://minato-shihoshoshi-office.pages.dev`

## カスタムドメイン設定

### ドメインをお持ちの場合

1. Cloudflare Pages プロジェクトの **Custom domains** タブを開く
2. **Set up a custom domain** をクリック
3. ドメイン名を入力（例: `minato-office.jp`）
4. DNS設定の指示に従う

### Cloudflareでドメインを購入する場合

1. Cloudflare Dashboard で **Domain Registration** を選択
2. ドメインを検索・購入
3. Pages プロジェクトに自動的に接続されます

## 環境変数の設定

本番環境で環境変数が必要な場合：

1. Pages プロジェクトの **Settings** → **Environment variables** を開く
2. **Add variable** をクリック
3. 変数名と値を入力
4. **Save** をクリック

## デプロイ後の確認

### SEO設定の確認

- [ ] `robots.txt` が正しく配信されている
- [ ] `sitemap.xml` が正しく配信されている
- [ ] メタタグが正しく設定されている

```bash
# robots.txt の確認
curl https://your-domain.com/robots.txt

# sitemap.xml の確認
curl https://your-domain.com/sitemap.xml
```

### ページの動作確認

- [ ] ホームページが正常に表示される
- [ ] ナビゲーションメニューが機能している
- [ ] 全ページへのリンクが正常に動作している
- [ ] モバイル表示が正常である
- [ ] お問い合わせフォームが表示されている

### Google Search Console への登録

1. [Google Search Console](https://search.google.com/search-console/) にアクセス
2. ドメイン所有権を確認
3. `sitemap.xml` を送信
4. インデックス登録をリクエスト

## 自動デプロイ

このプロジェクトは、`main` ブランチにプッシュされると自動的にデプロイされます。

```bash
# 自動デプロイの流れ
git push origin main
  ↓
GitHub Actions トリガー（設定されている場合）
  ↓
Cloudflare Pages が自動ビルド・デプロイ
  ↓
デプロイ完了
```

## トラブルシューティング

### ビルドが失敗する場合

1. ローカルで `pnpm build` を実行して確認
2. エラーメッセージをCloudflare Dashboardで確認
3. 依存パッケージのバージョンを確認

```bash
pnpm install
pnpm build
```

### ページが表示されない場合

1. ビルド出力ディレクトリが `dist/public` に設定されているか確認
2. DNS設定が正しいか確認
3. キャッシュをクリア（Ctrl+Shift+Delete）

### パフォーマンスが低い場合

1. Cloudflare の **Caching** 設定を確認
2. 画像の最適化を検討
3. 不要なJavaScriptを削除

## ロールバック

デプロイ後に問題が発生した場合：

1. Cloudflare Pages の **Deployments** タブを開く
2. 前のバージョンを選択
3. **Rollback to this deployment** をクリック

## サポート

- [Cloudflare Pages ドキュメント](https://developers.cloudflare.com/pages/)
- [Vite デプロイガイド](https://vitejs.dev/guide/static-deploy.html)
- [Cloudflare コミュニティ](https://community.cloudflare.com/)

---

**最終更新**: 2024年1月15日
