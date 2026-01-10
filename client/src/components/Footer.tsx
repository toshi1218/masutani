import { Link } from 'wouter';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

/**
 * Footer Component - Serene Trust Design System
 * Contains contact info, sitemap, and legal links
 */
export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      {/* Main Footer Content */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">お問い合わせ</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">電話</p>
                  <a href="tel:0312345678" className="hover:opacity-80 transition-opacity">
                    03-1234-5678
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">受付時間</p>
                  <p>平日 9:00-18:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">メール</p>
                  <a href="mailto:info@minato-office.jp" className="hover:opacity-80 transition-opacity break-all">
                    info@minato-office.jp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Office Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">事務所情報</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">所在地</p>
                  <p>東京都港区<br />赤坂1-1-1</p>
                </div>
              </div>
              <p className="text-xs opacity-90">
                対応エリア：東京都・神奈川県・千葉県・埼玉県
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">サービス</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/inheritance-succession">
                  <a className="hover:opacity-80 transition-opacity">遺産承継業務</a>
                </Link>
              </li>
              <li>
                <Link href="/services/will-execution">
                  <a className="hover:opacity-80 transition-opacity">遺言執行業務</a>
                </Link>
              </li>
              <li>
                <Link href="/services/voluntary-guardianship">
                  <a className="hover:opacity-80 transition-opacity">任意後見業務</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="font-bold text-lg mb-4">サイトマップ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="hover:opacity-80 transition-opacity">ホーム</a>
                </Link>
              </li>
              <li>
                <Link href="/office">
                  <a className="hover:opacity-80 transition-opacity">事務所情報</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="hover:opacity-80 transition-opacity">よくあるご質問</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:opacity-80 transition-opacity">お問い合わせ</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; 2024 みなと司法書士事務所. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/office">
              <a className="hover:opacity-80 transition-opacity">プライバシーポリシー</a>
            </Link>
            <Link href="/contact">
              <a className="hover:opacity-80 transition-opacity">お問い合わせ</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
