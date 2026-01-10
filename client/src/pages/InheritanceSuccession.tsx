import { Link } from 'wouter';
import { ChevronRight, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

/**
 * Inheritance Succession Service Page
 * Serene Trust Design System
 */
export default function InheritanceSuccession() {
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
              <span>遺産承継業務</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold heading-serif mb-6">
              遺産承継業務
            </h1>
            <p className="text-lg md:text-xl opacity-95 max-w-2xl">
              相続人の調査から遺産分割、不動産登記まで、相続に関わる一連の手続きを専門家としてサポートいたします。
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
                '相続人が複数いて、遺産分割の話し合いが進まない',
                '相続財産がどのくらいあるのか、把握していない',
                '被相続人の借金や債務がないか調査したい',
                '不動産の相続登記をしたいが、手続きが複雑',
                '遺産分割協議書の作成方法がわからない',
                '相続税の申告期限が近づいている'
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
                  title: '相続人の調査',
                  desc: '戸籍謄本等を取得し、相続人が誰であるかを正確に確定いたします。'
                },
                {
                  title: '相続財産の把握',
                  desc: '不動産、預貯金、有価証券など、相続財産の全体像を整理いたします。'
                },
                {
                  title: '遺産分割協議のサポート',
                  desc: '相続人間の話し合いをサポートし、公平で円滑な遺産分割を実現します。'
                },
                {
                  title: '遺産分割協議書の作成',
                  desc: '相続人全員の合意内容を正式な協議書として作成いたします。'
                },
                {
                  title: '不動産登記申請',
                  desc: '相続した不動産の所有権移転登記を申請・完了させます。'
                },
                {
                  title: '預貯金等の名義変更',
                  desc: '銀行や証券会社への手続きをサポートいたします。'
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
                  { step: '1', title: '初回相談', desc: 'ご状況をお伺いし、対応内容をご説明いたします（無料）' },
                  { step: '2', title: 'ご見積・ご契約', desc: '必要な手続きと費用についてご提案いたします' },
                  { step: '3', title: '必要書類の収集', desc: '戸籍謄本、財産目録など、必要な書類を収集いたします' },
                  { step: '4', title: '手続き実行', desc: '遺産分割協議書作成、登記申請など、各種手続きを進めます' },
                  { step: '5', title: '完了・ご報告', desc: '全ての手続き完了後、詳細をご報告いたします' }
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
                      相続人調査・財産把握
                    </p>
                    <p className="text-muted-foreground text-sm">
                      2～4週間
                    </p>
                  </div>
                  <div className="card-elevated p-4">
                    <p className="font-bold text-primary mb-1">
                      遺産分割協議
                    </p>
                    <p className="text-muted-foreground text-sm">
                      1～3ヶ月（相続人間の合意次第）
                    </p>
                  </div>
                  <div className="card-elevated p-4">
                    <p className="font-bold text-primary mb-1">
                      登記申請～完了
                    </p>
                    <p className="text-muted-foreground text-sm">
                      2～4週間
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
                      相続人調査・財産把握
                    </p>
                    <p className="text-muted-foreground text-sm">
                      50,000円～
                    </p>
                  </div>
                  <div className="card-elevated p-4">
                    <p className="font-bold text-primary mb-1">
                      遺産分割協議書作成
                    </p>
                    <p className="text-muted-foreground text-sm">
                      80,000円～
                    </p>
                  </div>
                  <div className="card-elevated p-4">
                    <p className="font-bold text-primary mb-1">
                      不動産登記申請
                    </p>
                    <p className="text-muted-foreground text-sm">
                      100,000円～
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    ※ 詳細は要見積。別途、登録免許税などの実費が必要です
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
                  q: '相続人が遠くに住んでいます。手続きは進められますか？',
                  a: 'はい、大丈夫です。書類の郵送やオンラインでの対応も可能です。遠方の相続人の方にも対応いたします。'
                },
                {
                  q: '相続人間で意見が対立しています。どうしたらいいですか？',
                  a: '中立的な立場から、各相続人のご希望をお伺いし、公平な遺産分割をご提案いたします。調停や訴訟が必要な場合は、弁護士をご紹介いたします。'
                },
                {
                  q: '相続税の申告も一緒にしてもらえますか？',
                  a: '相続税の申告は税理士の業務です。必要に応じて、信頼できる税理士をご紹介いたします。'
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
                    • 司法書士は、相続人間の争いがある場合、代理人として活動することはできません。その場合は弁護士にご相談ください。
                  </li>
                  <li>
                    • 相続放棄や限定承認をご希望の場合は、相続開始から3ヶ月以内に家庭裁判所に申立てが必要です。
                  </li>
                  <li>
                    • 遺産分割協議は、相続人全員の合意が必要です。一部の相続人の同意だけでは成立いたしません。
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="遺産承継についてのご相談"
          description="相続に関するお悩みやご質問は、お気軽にお問い合わせください。初回相談は無料です。"
        />
      </main>

      <Footer />
    </div>
  );
}
