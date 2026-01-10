import { Link } from 'wouter';
import { ChevronRight, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

/**
 * Will Execution Service Page
 * Serene Trust Design System
 */
export default function WillExecution() {
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
              <span>遺言執行業務</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold heading-serif mb-6">
              遺言執行業務
            </h1>
            <p className="text-lg md:text-xl opacity-95 max-w-2xl">
              遺言者の想いを尊重し、遺言の内容を正確に実行いたします。相続人間のトラブル防止にも役立ちます。
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
                '遺言があるが、どのように執行したらいいかわからない',
                '遺言者が指定した遺言執行者を誰にしたらいいか迷っている',
                '遺言の内容が複雑で、正確に実行できるか不安',
                '相続人間で遺言の解釈について意見が異なる',
                '遺言執行に必要な手続きや書類が多くて大変',
                '遺言執行者として責任を果たせるか心配'
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
                  title: '遺言の検認・検証',
                  desc: '遺言が有効であるか確認し、家庭裁判所への検認申立てを行います。'
                },
                {
                  title: '遺言執行者としての活動',
                  desc: '司法書士が遺言執行者として、遺言の内容を正確に実行いたします。'
                },
                {
                  title: '相続人の確定',
                  desc: '遺言執行に必要な相続人調査を行い、正確な相続関係を把握します。'
                },
                {
                  title: '財産目録の作成',
                  desc: '相続財産の全体像を整理し、透明性のある財産目録を作成いたします。'
                },
                {
                  title: '遺言の内容実現',
                  desc: '不動産登記、預貯金の名義変更、寄付など、遺言の内容を実現いたします。'
                },
                {
                  title: '相続人への報告',
                  desc: '遺言執行の進捗状況を定期的に報告し、透明性を確保いたします。'
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
                  { step: '1', title: '初回相談', desc: '遺言の内容と相続人の状況をお伺いいたします（無料）' },
                  { step: '2', title: '遺言執行者の就任', desc: 'ご契約の上、司法書士が遺言執行者として就任いたします' },
                  { step: '3', title: '相続人への通知', desc: '相続人に対し、遺言執行者就任を通知いたします' },
                  { step: '4', title: '遺言の実行', desc: '登記申請、名義変更など、遺言の内容を実行いたします' },
                  { step: '5', title: '完了報告', desc: '全ての手続き完了後、詳細な報告書をお渡しいたします' }
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
                      遺言検認（検認が必要な場合）
                    </p>
                    <p className="text-muted-foreground text-sm">
                      1～2ヶ月
                    </p>
                  </div>
                  <div className="card-elevated p-4">
                    <p className="font-bold text-primary mb-1">
                      遺言執行準備
                    </p>
                    <p className="text-muted-foreground text-sm">
                      2～4週間
                    </p>
                  </div>
                  <div className="card-elevated p-4">
                    <p className="font-bold text-primary mb-1">
                      遺言の実行
                    </p>
                    <p className="text-muted-foreground text-sm">
                      1～6ヶ月（内容による）
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
                      遺言執行者就任報酬
                    </p>
                    <p className="text-muted-foreground text-sm">
                      150,000円～
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
                  <div className="card-elevated p-4">
                    <p className="font-bold text-primary mb-1">
                      その他手続き
                    </p>
                    <p className="text-muted-foreground text-sm">
                      要見積
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
                  q: '遺言執行者は必ず必要ですか？',
                  a: '遺言に遺言執行者の指定がない場合でも、相続人の合意があれば誰かが遺言執行者として活動することができます。ただし、不動産登記などの手続きをスムーズに進めるため、専門家である司法書士を遺言執行者とすることをお勧めいたします。'
                },
                {
                  q: '遺言が公正証書ではなく、自筆証書遺言です。手続きは変わりますか？',
                  a: '自筆証書遺言の場合、家庭裁判所での検認手続きが必要です。その後の遺言執行手続きは同じです。'
                },
                {
                  q: '遺言執行者が相続人の一人である場合、問題がありますか？',
                  a: 'いいえ、相続人が遺言執行者となることは可能です。ただし、利益相反の可能性がある場合は、司法書士など第三者を遺言執行者とすることをお勧めいたします。'
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
                    • 遺言執行者は、遺言の内容に従って誠実に職務を遂行する義務があります。
                  </li>
                  <li>
                    • 自筆証書遺言の場合、家庭裁判所での検認手続きが完了するまで、遺言を開封してはいけません。
                  </li>
                  <li>
                    • 遺言に相続人間の争いが生じた場合、司法書士は代理人として活動することはできません。その場合は弁護士にご相談ください。
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="遺言執行についてのご相談"
          description="遺言の執行に関するお悩みやご質問は、お気軽にお問い合わせください。初回相談は無料です。"
        />
      </main>

      <Footer />
    </div>
  );
}
