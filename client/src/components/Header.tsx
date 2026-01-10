import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

/**
 * Header Component - Serene Trust Design System
 * Fixed navigation with responsive hamburger menu for mobile
 * Deep navy background with clean typography
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 text-primary font-bold text-lg md:text-xl hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">
              M
            </div>
            <span className="hidden sm:inline">みなと司法書士</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/">
            <a className="text-foreground hover:text-primary transition-colors font-medium">
              ホーム
            </a>
          </Link>
          <Link href="/office">
            <a className="text-foreground hover:text-primary transition-colors font-medium">
              事務所情報
            </a>
          </Link>
          
          {/* Services Dropdown */}
          <div className="group relative">
            <button className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1">
              サービス
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            <div className="absolute left-0 mt-0 w-56 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/services/inheritance-succession">
                <a className="block px-4 py-3 text-foreground hover:bg-secondary hover:text-primary transition-colors border-b border-border last:border-b-0">
                  遺産承継業務
                </a>
              </Link>
              <Link href="/services/will-execution">
                <a className="block px-4 py-3 text-foreground hover:bg-secondary hover:text-primary transition-colors border-b border-border last:border-b-0">
                  遺言執行業務
                </a>
              </Link>
              <Link href="/services/voluntary-guardianship">
                <a className="block px-4 py-3 text-foreground hover:bg-secondary hover:text-primary transition-colors border-b border-border last:border-b-0">
                  任意後見業務
                </a>
              </Link>
            </div>
          </div>

          <Link href="/faq">
            <a className="text-foreground hover:text-primary transition-colors font-medium">
              FAQ
            </a>
          </Link>
          <Link href="/contact">
            <a className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium">
              お問い合わせ
            </a>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="メニューを開く"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-b border-border">
          <div className="container py-4 flex flex-col gap-4">
            <Link href="/">
              <a
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                ホーム
              </a>
            </Link>
            <Link href="/office">
              <a
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                事務所情報
              </a>
            </Link>
            
            {/* Services Submenu */}
            <div className="pl-4 border-l-2 border-primary">
              <p className="text-foreground font-medium mb-2 text-sm text-muted-foreground">
                サービス
              </p>
              <Link href="/services/inheritance-succession">
                <a
                  className="block text-foreground hover:text-primary transition-colors py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  遺産承継業務
                </a>
              </Link>
              <Link href="/services/will-execution">
                <a
                  className="block text-foreground hover:text-primary transition-colors py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  遺言執行業務
                </a>
              </Link>
              <Link href="/services/voluntary-guardianship">
                <a
                  className="block text-foreground hover:text-primary transition-colors py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  任意後見業務
                </a>
              </Link>
            </div>

            <Link href="/faq">
              <a
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
            </Link>
            <Link href="/contact">
              <a
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </a>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
