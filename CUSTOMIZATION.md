# カスタマイズガイド

このドキュメントでは、みなと司法書士事務所Webサイトのコンテンツをカスタマイズする方法を説明します。

## 事務所情報の更新

### 基本情報（事務所名、代表者、連絡先など）

以下のファイルを編集して、事務所情報を更新してください：

#### 1. ヘッダーとフッター

**ファイル**: `client/src/components/Header.tsx` と `client/src/components/Footer.tsx`

```tsx
// 例：電話番号を変更
const OFFICE_PHONE = "03-1234-5678"; // ← ここを変更

// 例：メールアドレスを変更
const OFFICE_EMAIL = "info@minato-office.jp"; // ← ここを変更
```

#### 2. 事務所情報ページ

**ファイル**: `client/src/pages/Office.tsx`

```tsx
// 事務所名
<p className="text-lg font-bold">
  みなと司法書士事務所  {/* ← ここを変更 */}
</p>

// 代表者名
<p className="text-lg font-bold">
  司法書士 佐藤 健一  {/* ← ここを変更 */}
</p>

// 住所
<p className="font-bold mb-2">
  東京都港区赤坂1-1-1  {/* ← ここを変更 */}
</p>

// 電話
<a href="tel:0312345678" className="font-bold hover:text-primary transition-colors">
  03-1234-5678  {/* ← ここを変更 */}
</a>

// メール
<a href="mailto:info@minato-office.jp" className="font-bold hover:text-primary transition-colors break-all">
  info@minato-office.jp  {/* ← ここを変更 */}
</a>
```

#### 3. JSON-LD構造化データ

**ファイル**: `client/src/components/StructuredData.tsx`

```tsx
// Organization情報を更新
const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'みなと司法書士事務所',  // ← ここを変更
  telephone: '03-1234-5678',  // ← ここを変更
  email: 'info@minato-office.jp',  // ← ここを変更
  address: {
    streetAddress: '赤坂1-1-1 赤坂ビジネスセンター 5階',  // ← ここを変更
    addressLocality: '東京都港区',  // ← ここを変更
  }
};
```

## サービス情報の更新

### 料金表の変更

各サービスページの「費用の目安」セクションを編集します：

#### 遺産承継業務

**ファイル**: `client/src/pages/InheritanceSuccession.tsx`

```tsx
<div className="card-elevated p-4">
  <p className="font-bold text-primary mb-1">
    相続人調査・財産把握
  </p>
  <p className="text-muted-foreground text-sm">
    50,000円～  {/* ← ここを変更 */}
  </p>
</div>
```

#### 遺言執行業務

**ファイル**: `client/src/pages/WillExecution.tsx`

```tsx
<div className="card-elevated p-4">
  <p className="font-bold text-primary mb-1">
    遺言執行者就任報酬
  </p>
  <p className="text-muted-foreground text-sm">
    150,000円～  {/* ← ここを変更 */}
  </p>
</div>
```

#### 任意後見業務

**ファイル**: `client/src/pages/VoluntaryGuardianship.tsx`

```tsx
<div className="card-elevated p-4">
  <p className="font-bold text-primary mb-1">
    後見人報酬（月額）
  </p>
  <p className="text-muted-foreground text-sm">
    30,000円～  {/* ← ここを変更 */}
  </p>
</div>
```

## ホームページのお知らせ更新

**ファイル**: `client/src/pages/Home.tsx`

```tsx
{/* News Section */}
<section className="py-16 md:py-24 bg-secondary">
  <div className="container">
    <h2 className="text-3xl md:text-4xl font-bold heading-serif mb-12 text-center">
      お知らせ
    </h2>
    
    <div className="max-w-3xl mx-auto space-y-4">
      {[
        {
          date: '2024年1月15日',
          title: 'Webサイトをリニューアルしました',
          desc: '新しいWebサイトが完成いたしました。'
        },
        // ← ここにお知らせを追加
      ].map((news, idx) => (
        // ...
      ))}
    </div>
  </div>
</section>
```

## FAQ（よくあるご質問）の更新

**ファイル**: `client/src/pages/FAQ.tsx`

```tsx
const faqs = [
  {
    category: '相談方法について',
    items: [
      {
        q: '初回相談は本当に無料ですか？',
        a: 'はい、初回相談は無料です。'
      },
      // ← ここに質問を追加
    ]
  }
];
```

## 画像の追加・変更

### ヒーロー画像やサービス画像の変更

1. 画像ファイルを `client/public/images/` ディレクトリに配置
2. ファイル名をメモ（例: `hero-trust.jpg`）
3. 各ページで参照

```tsx
// 例：ホームページのヒーロー画像
<div
  className="absolute inset-0 bg-cover bg-center opacity-20"
  style={{
    backgroundImage: 'url(/images/hero-trust.jpg)'  // ← ここを変更
  }}
/>
```

## ナビゲーションメニューの変更

**ファイル**: `client/src/components/Header.tsx`

```tsx
const navItems = [
  { label: 'ホーム', href: '/' },
  { label: '事務所情報', href: '/office' },
  {
    label: 'サービス',
    submenu: [
      { label: '遺産承継業務', href: '/services/inheritance-succession' },
      { label: '遺言執行業務', href: '/services/will-execution' },
      { label: '任意後見業務', href: '/services/voluntary-guardianship' }
    ]
  },
  { label: 'FAQ', href: '/faq' },
  { label: 'お問い合わせ', href: '/contact' }
];
```

## デザインのカスタマイズ

### 色の変更

**ファイル**: `client/src/index.css`

```css
:root {
  /* 主色（濃紺）を変更 */
  --primary: oklch(0.35 0.15 260);  /* ← ここを変更 */
  
  /* 背景色を変更 */
  --background: oklch(1 0 0);  /* ← ここを変更 */
  
  /* テキスト色を変更 */
  --foreground: oklch(0.235 0.015 65);  /* ← ここを変更 */
}
```

### フォントの変更

**ファイル**: `client/index.html`

```html
<!-- Google Fonts を変更 -->
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&family=Noto+Sans+JP:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

**ファイル**: `client/src/index.css`

```css
@layer base {
  body {
    font-family: 'Noto Sans JP', sans-serif;  /* ← ここを変更 */
  }
  
  .heading-serif {
    font-family: 'Noto Serif JP', serif;  /* ← ここを変更 */
  }
}
```

## SEO設定の更新

### ページタイトルとメタディスクリプション

**ファイル**: `client/index.html`

```html
<title>みなと司法書士事務所 - 遺産承継・遺言執行・任意後見</title>  <!-- ← ここを変更 -->
<meta name="description" content="東京都港区の司法書士事務所。遺産承継、遺言執行、任意後見の専門家です。初回相談無料。" />  <!-- ← ここを変更 -->
```

### サイトマップの更新

**ファイル**: `client/public/sitemap.xml`

新しいページを追加した場合、サイトマップに追加してください：

```xml
<url>
  <loc>https://minato-office.jp/new-page</loc>
  <lastmod>2024-01-15</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

## お問い合わせフォームの実装

現在、フォーム送信は UI のみ実装されています。本番環境では、以下のいずれかで実装してください：

### オプション1: Cloudflare Pages Functions

`functions/contact.ts` を作成：

```typescript
export async function onRequest(context) {
  if (context.request.method === 'POST') {
    const data = await context.request.json();
    
    // メール送信処理など
    // ...
    
    return new Response(JSON.stringify({ success: true }));
  }
  return new Response('Method not allowed', { status: 405 });
}
```

### オプション2: 外部サービス（Formspree など）

```tsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  if (response.ok) {
    setSubmitted(true);
  }
};
```

## 変更後の確認

変更後は、以下の手順で確認してください：

```bash
# 1. ローカルで開発サーバーを起動
pnpm dev

# 2. ブラウザで http://localhost:5173 にアクセス
# 3. 変更が正しく反映されているか確認

# 4. ビルドして本番環境での動作を確認
pnpm build

# 5. 問題がなければ、GitHubにプッシュ
git add .
git commit -m "Update: [変更内容]"
git push origin main

# 6. Cloudflare Pages が自動的にデプロイ
```

## よくある質問

### Q: ページを追加したい場合は？

A: 以下の手順で新しいページを追加できます：

1. `client/src/pages/NewPage.tsx` を作成
2. `client/src/App.tsx` に新しいルートを追加
3. `client/src/components/Header.tsx` のナビゲーションに追加
4. `client/public/sitemap.xml` に追加

### Q: デザインを大きく変更したい場合は？

A: 以下のファイルを編集してください：

- `client/src/index.css` - グローバルスタイル
- `client/src/components/` - コンポーネント
- 各ページファイル

### Q: 複数言語対応したい場合は？

A: i18n ライブラリ（例: `react-i18next`）の導入を検討してください。

---

**最終更新**: 2024年1月15日
