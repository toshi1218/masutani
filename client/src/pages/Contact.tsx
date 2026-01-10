import { Link } from 'wouter';
import { ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Contact Page
 * Serene Trust Design System
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    nameKana: '',
    phone: '',
    email: '',
    service: 'inheritance-succession',
    message: '',
    contactMethod: 'email',
    privacy: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API endpoint
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        nameKana: '',
        phone: '',
        email: '',
        service: 'inheritance-succession',
        message: '',
        contactMethod: 'email',
        privacy: false
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20">
        {/* Breadcrumb */}
        <div className="bg-secondary">
          <div className="container py-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/">
                <a className="hover:text-primary transition-colors">ホーム</a>
              </Link>
              <ChevronRight size={16} />
              <span>お問い合わせ</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold heading-serif mb-6">
              お問い合わせ
            </h1>
            <p className="text-lg md:text-xl opacity-95 max-w-2xl">
              ご不明な点やお悩みがございましたら、お気軽にお問い合わせください
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {/* Phone */}
              <div className="card-elevated p-8 text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone size={32} />
                </div>
                <h3 className="text-xl font-bold heading-serif mb-3">
                  お電話
                </h3>
                <a href="tel:0312345678" className="text-primary font-bold text-lg hover:underline mb-3 block">
                  03-1234-5678
                </a>
                <p className="text-sm text-muted-foreground">
                  平日 9:00-18:00<br />
                  （土日祝日はお休み）
                </p>
              </div>

              {/* Email */}
              <div className="card-elevated p-8 text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail size={32} />
                </div>
                <h3 className="text-xl font-bold heading-serif mb-3">
                  メール
                </h3>
                <a href="mailto:info@minato-office.jp" className="text-primary font-bold hover:underline mb-3 block break-all">
                  info@minato-office.jp
                </a>
                <p className="text-sm text-muted-foreground">
                  24時間受付<br />
                  （返信は営業時間内）
                </p>
              </div>

              {/* Address */}
              <div className="card-elevated p-8 text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin size={32} />
                </div>
                <h3 className="text-xl font-bold heading-serif mb-3">
                  ご来所
                </h3>
                <p className="text-sm font-bold mb-2">
                  東京都港区赤坂1-1-1<br />
                  赤坂ビジネスセンター 5階
                </p>
                <p className="text-xs text-muted-foreground">
                  赤坂見附駅 徒歩3分
                </p>
              </div>
            </div>

            <div className="section-divider my-16" />

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold heading-serif mb-8 text-center">
                お問い合わせフォーム
              </h2>

              {submitted ? (
                <div className="card-elevated p-8 bg-secondary border-l-4 border-accent-gold text-center">
                  <h3 className="text-xl font-bold heading-serif mb-2 text-primary">
                    ご送信ありがとうございました
                  </h3>
                  <p className="text-muted-foreground">
                    お問い合わせを受け付けました。<br />
                    営業時間内に、ご連絡させていただきます。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-bold heading-serif mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="山田太郎"
                    />
                  </div>

                  {/* Name Kana */}
                  <div>
                    <label className="block text-sm font-bold heading-serif mb-2">
                      ふりがな <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nameKana"
                      value={formData.nameKana}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="やまだたろう"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-bold heading-serif mb-2">
                      電話番号 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="090-1234-5678"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold heading-serif mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="yamada@example.com"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-bold heading-serif mb-2">
                      ご希望のサービス <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="inheritance-succession">遺産承継業務</option>
                      <option value="will-execution">遺言執行業務</option>
                      <option value="voluntary-guardianship">任意後見業務</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-bold heading-serif mb-2">
                      相談概要 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="ご相談内容をお聞かせください"
                    />
                  </div>

                  {/* Contact Method */}
                  <div>
                    <label className="block text-sm font-bold heading-serif mb-3">
                      ご希望の連絡方法 <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="email"
                          checked={formData.contactMethod === 'email'}
                          onChange={handleChange}
                          className="w-4 h-4"
                        />
                        <span className="text-sm">メール</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="phone"
                          checked={formData.contactMethod === 'phone'}
                          onChange={handleChange}
                          className="w-4 h-4"
                        />
                        <span className="text-sm">電話</span>
                      </label>
                    </div>
                  </div>

                  {/* Privacy Agreement */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="privacy"
                        checked={formData.privacy}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 mt-1"
                      />
                      <span className="text-sm text-muted-foreground">
                        <Link href="/office">
                          <a className="text-primary font-bold hover:underline">
                            プライバシーポリシー
                          </a>
                        </Link>
                        に同意します <span className="text-red-500">*</span>
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
                  >
                    送信する
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    ※ 送信いただいた情報は、お問い合わせへの対応のためのみに使用いたします。
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
