import { Link } from 'wouter';
import { ChevronRight, MapPin, Phone, Clock, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

/**
 * Office Information Page
 * Serene Trust Design System
 */
export default function Office() {
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
              <span>事務所情報</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold heading-serif mb-6">
              事務所情報
            </h1>
            <p className="text-lg md:text-xl opacity-95 max-w-2xl">
              みなと司法書士事務所についてのご紹介です
            </p>
          </div>
        </section>

        {/* Office Overview */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Left: Info */}
              <div>
                <h2 className="text-3xl font-bold heading-serif mb-8">
                  事務所概要
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">
                      事務所名
                    </p>
                    <p className="text-lg font-bold">
                      みなと司法書士事務所
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">
                      代表者
                    </p>
                    <p className="text-lg font-bold">
                      司法書士 佐藤 健一
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">
                      登録・所属
                    </p>
                    <p className="text-sm">
                      東京法務局 登録番号 第1234号<br />
                      日本司法書士会連合会 会員<br />
                      東京司法書士会 会員
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">
                      対応エリア
                    </p>
                    <p className="text-sm">
                      東京都・神奈川県・千葉県・埼玉県
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground font-medium mb-3">
                      連絡先
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Phone size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-muted-foreground">電話</p>
                          <a href="tel:0312345678" className="font-bold hover:text-primary transition-colors">
                            03-1234-5678
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-muted-foreground">メール</p>
                          <a href="mailto:info@minato-office.jp" className="font-bold hover:text-primary transition-colors break-all">
                            info@minato-office.jp
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-muted-foreground">受付時間</p>
                          <p className="font-bold">
                            平日 9:00-18:00<br />
                            <span className="text-sm">（土日祝日はお休み）</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Address & Map */}
              <div>
                <h2 className="text-3xl font-bold heading-serif mb-8">
                  アクセス
                </h2>
                
                <div className="card-elevated p-8 mb-8">
                  <div className="flex items-start gap-3 mb-6">
                    <MapPin size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground font-medium mb-1">
                        所在地
                      </p>
                      <p className="font-bold mb-2">
                        東京都港区赤坂1-1-1<br />
                        赤坂ビジネスセンター 5階
                      </p>
                      <p className="text-sm text-muted-foreground">
                        〒107-0052
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-secondary rounded-lg overflow-hidden mb-8 h-64 flex items-center justify-center border border-border">
                  <div className="text-center text-muted-foreground">
                    <MapPin size={48} className="mx-auto mb-2 opacity-50" />
                    <p className="text-sm">
                      地図はここに表示されます<br />
                      <span className="text-xs">（後で埋め込み可能）</span>
                    </p>
                  </div>
                </div>

                {/* Access Info */}
                <div className="card-elevated p-6">
                  <h3 className="font-bold heading-serif mb-4">
                    交通アクセス
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <span className="font-bold">赤坂見附駅</span>
                      <span className="text-muted-foreground">
                        丸ノ内線・銀座線 徒歩3分
                      </span>
                    </li>
                    <li>
                      <span className="font-bold">赤坂駅</span>
                      <span className="text-muted-foreground">
                        丸ノ内線 徒歩5分
                      </span>
                    </li>
                    <li>
                      <span className="font-bold">溜池山王駅</span>
                      <span className="text-muted-foreground">
                        南北線・銀座線 徒歩7分
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold heading-serif mb-8 text-center">
              大切にしていること
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: 'ご依頼者の立場に立つ',
                  desc: 'ご依頼者のご状況やご希望を十分にお伺いし、最適な解決策をご提案いたします。複雑な法律用語を避け、わかりやすくご説明することを心がけています。'
                },
                {
                  title: '透明性と信頼',
                  desc: '手続きの進捗状況を定期的にご報告し、不安なくお任せいただけるようにいたします。費用についても、事前に詳しくご説明し、後から予期しない請求がないようにいたします。'
                },
                {
                  title: '迅速で正確な対応',
                  desc: '相続に関する手続きには期限があります。法律に基づいた正確な対応を、迅速に進めることをお約束いたします。'
                },
                {
                  title: '相続人間のトラブル防止',
                  desc: '相続は、ご家族の感情が絡む複雑な問題です。中立的な立場から、相続人間のトラブルを防ぎ、円滑な相続を実現するようサポートいたします。'
                }
              ].map((item, idx) => (
                <div key={idx} className="card-elevated p-8">
                  <h3 className="text-xl font-bold heading-serif mb-3 text-primary">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold heading-serif mb-8">
              プライバシーポリシー
            </h2>

            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-bold heading-serif text-lg mb-3 text-foreground">
                  個人情報の取り扱いについて
                </h3>
                <p>
                  みなと司法書士事務所は、ご依頼者の個人情報を厳重に管理いたします。ご相談いただいた内容や個人情報は、法律で定められた範囲内でのみ利用し、ご本人の同意なく第三者に開示することはございません。
                </p>
              </div>

              <div>
                <h3 className="font-bold heading-serif text-lg mb-3 text-foreground">
                  情報セキュリティ
                </h3>
                <p>
                  個人情報の漏洩、紛失、改ざん等を防止するため、適切なセキュリティ対策を実施いたしております。
                </p>
              </div>

              <div>
                <h3 className="font-bold heading-serif text-lg mb-3 text-foreground">
                  弁護士法第23条の2（秘密保持義務）
                </h3>
                <p>
                  司法書士には、法律により秘密保持義務が課せられています。ご依頼者の秘密は、法律で定められた場合を除き、絶対に守られます。
                </p>
              </div>

              <div>
                <h3 className="font-bold heading-serif text-lg mb-3 text-foreground">
                  お問い合わせ
                </h3>
                <p>
                  個人情報の取り扱いについてご質問やご不安な点がございましたら、お気軽にお問い合わせください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
