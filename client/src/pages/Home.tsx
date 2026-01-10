import { Link } from 'wouter';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { OrganizationSchema, ServiceSchema } from '@/components/StructuredData';

/**
 * Home Page - Serene Trust Design System
 * Hero section, service overview, strengths, process, news, contact
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <OrganizationSchema />
      <ServiceSchema />
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 md:py-32">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 heading-serif leading-tight">
                人生の大切な瞬間に<br />寄り添う司法書士
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-95 leading-relaxed">
                遺産承継、遺言執行、任意後見。相続に関する複雑な手続きを、丁寧にサポートいたします。ご不安なことがあれば、まずはお気軽にご相談ください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <a className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300">
                    無料相談を申し込む
                    <ArrowRight size={20} />
                  </a>
                </Link>
                <Link href="/services/inheritance-succession">
                  <a className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                    サービスを詳しく見る
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold heading-serif mb-4">
                主なサービス
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                相続に関する3つの主要業務を、専門知識と経験でサポートいたします
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <Link href="/services/inheritance-succession">
                <a className="card-elevated p-8 group">
                  <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold heading-serif mb-2">
                    遺産承継業務
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    相続人の調査から遺産分割、不動産登記まで、相続に関わる一連の手続きをサポートします。
                  </p>
                  <div className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                    詳しく見る
                    <ArrowRight size={18} />
                  </div>
                </a>
              </Link>

              {/* Service 2 */}
              <Link href="/services/will-execution">
                <a className="card-elevated p-8 group">
                  <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold heading-serif mb-2">
                    遺言執行業務
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    遺言者の想いを尊重し、遺言の内容を正確に実行いたします。相続人間のトラブル防止にも。
                  </p>
                  <div className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                    詳しく見る
                    <ArrowRight size={18} />
                  </div>
                </a>
              </Link>

              {/* Service 3 */}
              <Link href="/services/voluntary-guardianship">
                <a className="card-elevated p-8 group">
                  <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 12H9m6 0a6 6 0 11-12 0 6 6 0 0112 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold heading-serif mb-2">
                    任意後見業務
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    将来に備えて、信頼できるパートナーとして財産管理や生活支援の契約をサポートします。
                  </p>
                  <div className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                    詳しく見る
                    <ArrowRight size={18} />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Strengths Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold heading-serif mb-4">
                当事務所の強み
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                相続に関する複雑な手続きを、安心してお任せいただけます
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: '丁寧なヒアリング',
                  description: 'ご家族の状況やご希望を十分にお伺いし、最適な解決策をご提案いたします。'
                },
                {
                  title: '手続きの見える化',
                  description: '複雑な手続きの進捗状況を定期的にご報告し、安心いただけるようサポートします。'
                },
                {
                  title: '相続人間の負担軽減',
                  description: '専門家として中立的な立場から、相続人間のトラブル防止に努めます。'
                }
              ].map((item, idx) => (
                <div key={idx} className="card-elevated p-8">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-accent-gold flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-bold heading-serif mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold heading-serif mb-4">
                ご相談の流れ
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                初回相談から完了まで、ステップバイステップでサポートいたします
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  { step: '1', title: '初回相談', desc: 'ご状況やご希望をお伺いします（無料）' },
                  { step: '2', title: 'ご説明・ご提案', desc: '対応内容と費用についてご説明いたします' },
                  { step: '3', title: 'ご契約', desc: 'ご納得いただいた上で、契約を締結します' },
                  { step: '4', title: '手続き実行', desc: '必要な書類収集や手続きを進めます' },
                  { step: '5', title: '完了・ご報告', desc: '手続き完了後、詳細をご報告いたします' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                      {idx < 4 && (
                        <div className="w-1 h-12 bg-border mt-2" />
                      )}
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

        {/* News Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold heading-serif mb-4">
                お知らせ
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  date: '2024.01.15',
                  title: 'ホームページをリニューアルしました',
                  desc: 'より見やすく、わかりやすいサイトに生まれ変わりました。'
                },
                {
                  date: '2024.01.10',
                  title: '相続セミナーのお知らせ',
                  desc: '相続について学べるセミナーを開催予定です。詳細はお問い合わせください。'
                },
                {
                  date: '2024.01.05',
                  title: '新年のご挨拶',
                  desc: '本年も皆様のお役に立てるよう、スタッフ一同努力いたします。'
                }
              ].map((news, idx) => (
                <div key={idx} className="card-elevated p-6 border-l-4 border-accent-gold">
                  <p className="text-sm text-muted-foreground font-medium mb-2">
                    {news.date}
                  </p>
                  <h3 className="text-lg font-bold heading-serif mb-2">
                    {news.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {news.desc}
                  </p>
                </div>
              ))}
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
