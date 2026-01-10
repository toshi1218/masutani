import { Link } from 'wouter';
import { ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

/**
 * FAQ Page
 * Serene Trust Design System
 */
export default function FAQ() {
  const faqs = [
    {
      category: '相談方法について',
      items: [
        {
          q: '初回相談は本当に無料ですか？',
          a: 'はい、初回相談は無料です。ご状況をお伺いし、対応内容についてご説明いたします。相談だけで、ご契約いただかなくても大丈夫です。'
        },
        {
          q: 'オンラインでの相談は可能ですか？',
          a: 'はい、可能です。Zoom等を使用したオンライン相談もお受けしております。お気軽にお問い合わせください。'
        },
        {
          q: '相談予約はどのようにしたらいいですか？',
          a: 'お電話またはメール、お問い合わせフォームからご予約ください。平日9:00-18:00の間にご連絡いただければ、ご都合の良い日時をご案内いたします。'
        },
        {
          q: '夜間や土日の相談は可能ですか？',
          a: '通常は平日9:00-18:00の対応ですが、ご相談ください。ご都合がつけば、対応させていただく場合もございます。'
        }
      ]
    },
    {
      category: '費用について',
      items: [
        {
          q: '費用はどのくらいかかりますか？',
          a: 'ご依頼内容によって異なります。初回相談でご状況をお伺いした上で、詳しくご説明いたします。'
        },
        {
          q: '見積もりは無料ですか？',
          a: 'はい、見積もりは無料です。ご納得いただいた上でご契約ください。'
        },
        {
          q: '費用の支払い方法は？',
          a: '銀行振込、現金払いなど、ご相談に応じます。分割払いについてもご相談ください。'
        },
        {
          q: '登録免許税などの実費は別途必要ですか？',
          a: 'はい、登録免許税、戸籍謄本取得費用など、実費は別途必要です。事前にご説明いたします。'
        }
      ]
    },
    {
      category: '必要書類について',
      items: [
        {
          q: 'どのような書類が必要ですか？',
          a: 'ご依頼内容によって異なります。相続の場合、戸籍謄本、遺言書、財産目録などが必要になります。詳しくはご相談時にご説明いたします。'
        },
        {
          q: '書類の取得は事務所でしてくれますか？',
          a: 'はい、戸籍謄本などの取得は、事務所で代行いたします。別途、取得費用がかかります。'
        },
        {
          q: 'どのくらい前から書類を準備したらいいですか？',
          a: 'ご相談時に詳しくご説明いたします。一般的には、相談から1～2週間程度で準備いただければ大丈夫です。'
        }
      ]
    },
    {
      category: '期間について',
      items: [
        {
          q: '手続きにはどのくらい時間がかかりますか？',
          a: 'ご依頼内容によって異なります。相続人調査から登記完了まで、3～6ヶ月程度が目安です。'
        },
        {
          q: '急いでいるのですが、早く完了できますか？',
          a: 'ご状況によっては、対応を急ぐことも可能です。ご相談ください。'
        },
        {
          q: '相続放棄の期限はありますか？',
          a: 'はい、相続開始から3ヶ月以内に家庭裁判所に申立てが必要です。期限を過ぎると、相続放棄ができなくなる場合があります。'
        }
      ]
    },
    {
      category: '対応範囲について',
      items: [
        {
          q: '相続人間で争いがある場合、対応してもらえますか？',
          a: '司法書士は、相続人間の争いがある場合、代理人として活動することはできません。その場合は、弁護士にご相談ください。ただし、信頼できる弁護士をご紹介することはできます。'
        },
        {
          q: '相続税の申告も一緒にしてもらえますか？',
          a: '相続税の申告は税理士の業務です。必要に応じて、信頼できる税理士をご紹介いたします。'
        },
        {
          q: '遺産分割協議がまとまらない場合はどうしたらいいですか？',
          a: '家庭裁判所での調停や訴訟が必要になる場合があります。その場合は、弁護士にご相談ください。'
        },
        {
          q: '外国の相続人がいる場合、対応できますか？',
          a: 'はい、対応いたします。ただし、別途、翻訳や認証などが必要になる場合があります。ご相談ください。'
        }
      ]
    },
    {
      category: 'その他',
      items: [
        {
          q: '相談内容は秘密にしてもらえますか？',
          a: 'はい、司法書士には法律により秘密保持義務が課せられています。ご相談内容は絶対に秘密です。'
        },
        {
          q: '複数の事務所に相談してもいいですか？',
          a: 'もちろん大丈夫です。複数の事務所に相談いただき、ご納得いただいた上でご依頼ください。'
        },
        {
          q: '依頼後、別の事務所に変更することはできますか？',
          a: 'はい、可能です。ただし、ご契約内容によって異なる場合があります。ご相談ください。'
        }
      ]
    }
  ];

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
              <span>よくあるご質問</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold heading-serif mb-6">
              よくあるご質問
            </h1>
            <p className="text-lg md:text-xl opacity-95 max-w-2xl">
              ご依頼者からよくいただくご質問をまとめました
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <div className="space-y-16">
              {faqs.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h2 className="text-2xl md:text-3xl font-bold heading-serif mb-8 text-primary">
                    {section.category}
                  </h2>

                  <div className="space-y-4">
                    {section.items.map((item, itemIdx) => (
                      <details
                        key={itemIdx}
                        className="card-elevated p-6 group cursor-pointer"
                      >
                        <summary className="font-bold heading-serif text-lg flex items-center justify-between">
                          <span className="text-left">
                            Q. {item.q}
                          </span>
                          <span className="text-primary group-open:rotate-180 transition-transform flex-shrink-0 ml-4">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                          </span>
                        </summary>
                        <div className="mt-6 pt-6 border-t border-border">
                          <p className="text-muted-foreground leading-relaxed">
                            <span className="font-bold text-primary">A. </span>
                            {item.a}
                          </p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-16 pt-16 border-t border-border">
              <div className="card-elevated p-8 bg-secondary">
                <h3 className="text-xl font-bold heading-serif mb-4">
                  ご質問がある場合
                </h3>
                <p className="text-muted-foreground mb-6">
                  こちらに掲載されていないご質問がございましたら、お気軽にお問い合わせください。初回相談は無料です。
                </p>
                <Link href="/contact">
                  <a className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">
                    お問い合わせフォーム
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </Link>
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
