import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

/**
 * CTA Section Component - Serene Trust Design System
 * Strong call-to-action section with contact encouragement
 * Used at the end of each page to drive conversions
 */
interface CTASectionProps {
  title?: string;
  description?: string;
}

export default function CTASection({
  title = '相談は無料です',
  description = 'ご不明な点やお悩みなことがあれば、まずはお気軽にお問い合わせください。専門家がていねいにご説明いたします。'
}: CTASectionProps) {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-16 md:py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-serif">
            {title}
          </h2>
          <p className="text-lg mb-8 opacity-95">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Contact Button */}
            <Link href="/contact">
              <a className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg">
                お問い合わせフォーム
                <ArrowRight size={20} />
              </a>
            </Link>
            
            {/* Phone Button */}
            <a
              href="tel:0312345678"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:bg-opacity-10 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              03-1234-5678
            </a>
          </div>

          <p className="text-sm opacity-80 mt-6">
            平日 9:00-18:00 / メール：info@minato-office.jp
          </p>
        </div>
      </div>
    </section>
  );
}
