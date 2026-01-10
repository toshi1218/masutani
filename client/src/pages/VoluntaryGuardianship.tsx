import { Link } from 'wouter';
import { ChevronRight, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

/**
 * Voluntary Guardianship Service Page
 * Serene Trust Design System
 */
export default function VoluntaryGuardianship() {
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
              <span>任意後見業務</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold heading-serif mb-6">
              任意後見業務
            </h1>
            <p className="text-lg md:text-xl opacity-95 max-w-2xl">
              将来に備えて、信頼できるパートナーとして財産管理や生活支援の契約をサポートいたします。
            </p>
          </div>
        </section>

        {/* Concerns Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold heading-serif mb-12 text-center">
              こんなお悩みありませんか？
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                '将来、認知症になったときの財産管理が心配',
                '一人暮らしで、誰に任せたらいいか迷っている',
                '子どもに負担をかけたくないので、事前に対策したい',
                '任意後見契約をどのように結べばいいかわからない',
                '信頼できる後見人を見つけたい',
                '介護施設への入所手続きなど、生活支援も必要'
              ].map((concern, idx) => (
                <div key={idx} className="flex gap-4 card-elevated p-6">
                  <div className="text-accent-gold flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                    </svg>
                  </div>
                  <p className="text-foreground">
                    {concern}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold heading-serif mb-12 text-center">
              サービスでできること
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  title: '任意後見契約の相談',
                  desc: 'ご自身の希望や不安をお伺いし、最適な任意後見契約の内容をご提案いたします。'
                },
                {
                  title: '任意後見契約書の作成',
                  desc: '公正証書による任意後見契約書を作成いたします。'
                },
                {
                  title: '財産管理委任契約',
                  desc: '判断能力がある現在から、財産管理を委任する契約をサポートいたします。'
                },
                {
                  title: '生活支援委任契約',
                  desc: '介護施設への入所手続きや医療に関する契約など、生活支援を委任する契約をサポートいたします。'
                },
                {
                  title: '後見人としての活動',
                  desc: '判断能力が低下した後、司法書士が後見人として活動いたします。'
                },
                {
                  title: '定期的な報告',
                  desc: '財産管理の状況を定期的にご報告し、透明性を確保いたします。'
                }
              ].map((service, idx) => (
                <div key={idx} className="card-elevated p-8">
                  <h3 className="text-xl font-bold heading-serif mb-3 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold heading-serif mb-12 text-center">
              進め方（5ステップ）
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  { step: '1', title: '初回相談', desc: 'ご希望や不安をお伺いし、任意後見についてご説明いたします（無料）' },
                  { step: '2', title: 'ご提案・ご契約', desc: '最適な契約内容をご提案し、ご契約いただきます' },
                  { step: '3', title: '公正証書作成', desc: '公証役場で公正証書による契約書を作成いたします' },
                  { step: '4', title: '登記手続き', desc: '任意後見契約を法務局に登記いたします' },
                  { step: '5', title: 'サポート開始', desc: '判断能力が低下した際、後見人として活動を開始いたします' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      {idx < 4 && <div className="w-1 h-12 bg-border mt-2" />}
                    </div>
                    <div className="pb-8">
                      <h3 className="text-lg font-bold heading-serif mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline & Cost Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Timeline */}
              <div>
                <h3 className="text-2xl font-bold heading-serif mb-6">
                  期間の目安
                </h3>
                <div className="space-y-4">
                  <div className="card-elevated p-4">
                    <p className="font-bold text-primary mb-1">
                      相談～契約締結
                    </p>
                    <p className="text-muted-foreground text-sm">
                      2～4週間
                    </p>
                  </div>
                  <div className="card-elevated p-4">
                    <p className="font-bold text-primary mb-1">
                      公正証書作成～登記
                    </p>
                    <p className="text-muted-foreground text-sm">
                      1～2週間
                    </p>
                  </div>
                  <div className="card-elevated p-4">
                    <p className="font-bold text-primary mb-1">
                      契約完成
                    </p>
                    <p className="text-muted-foreground text-sm">
                      1ヶ月程度
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    ※ 目安であり、案件によって異なります
                  </p>
                </div>
              </div>

              {/* Cost */}
              <div>
                <h3 className="text-2xl font-bold heading-serif mb-6">
                  費用の目安
                </h3>
                <div className="space-y-4">
                  <div className="card-elevated p-4">
                    <p className="font-bold text-primary mb-1">
                      任意後見契約書作成
                    </p>
                    <p className="text-muted-foreground text-sm">
                      80,000円～
                    </p>
                  </div>
                  <div className="card-elevated p-4">
                    <p className="font-bold text-primary mb-1">
                      後見人報酬（月額）
                    </p>
                    <p className="text-muted-foreground text-sm">
                      30,000円～
                    </p>
                  </div>
                  <div className="card-elevated p-4">
                    <p className="font-bold text-primary mb-1">
                      公証人手数料
                    </p>
                    <p className="text-muted-foreground text-sm">
                      別途必要
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    ※ 詳細は要見積。公証人手数料は別途必要です
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold heading-serif mb-12 text-center">
              よくある質問
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: '任意後見と法定後見の違いは何ですか？',
                  a: '任意後見は、判断能力がある現在のうちに、信頼できる人と契約を結ぶものです。一方、法定後見は、判断能力が低下した後に家庭裁判所が後見人を選任するものです。任意後見なら、自分で後見人を選べます。'
                },
                {
                  q: '任意後見契約を結んだ後、キャンセルできますか？',
                  a: 'はい、契約を結んだ後でも、判断能力がある限りはキャンセルすることができます。ただし、公正証書で作成した契約ですので、手続きが必要です。'
                },
                {
                  q: '後見人になってくれる人がいません。どうしたらいいですか？',
                  a: '司法書士など専門家を後見人とすることもできます。ご相談ください。'
                }
              ].map((item, idx) => (
                <details key={idx} className="card-elevated p-6 group cursor-pointer">
                  <summary className="font-bold heading-serif text-lg flex items-center justify-between">
                    {item.q}
                    <span className="text-primary group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-muted-foreground mt-4">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                その他のご質問は、
                <Link href="/faq">
                  <a className="text-primary font-bold hover:underline">
                    よくあるご質問ページ
                  </a>
                </Link>
                をご覧ください。
              </p>
            </div>
          </div>
        </section>

        {/* Notes Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container max-w-3xl">
            <div className="flex gap-4 card-elevated p-8 border-l-4 border-accent-gold">
              <AlertCircle className="text-accent-gold flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold heading-serif text-lg mb-3">
                  ご注意事項
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>
                    • 任意後見契約は、必ず公正証書で作成する必要があります。
                  </li>
                  <li>
                    • 任意後見人は、本人の判断能力が低下した後、家庭裁判所に後見開始の申立てをする必要があります。
                  </li>
                  <li>
                    • 後見人は、本人の利益のために、誠実に職務を遂行する義務があります。
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="任意後見についてのご相談"
          description="将来に備えた任意後見契約について、お気軽にお問い合わせください。初回相談は無料です。"
        />
      </main>

      <Footer />
    </div>
  );
}
