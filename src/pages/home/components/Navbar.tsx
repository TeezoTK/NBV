
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'What to Expect', href: '#what-to-expect' },
    { label: 'My Work', href: '#portfolio' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="cursor-pointer">
            <h1 className={`text-2xl md:text-3xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`} style={{ fontFamily: 'Playfair Display, serif' }}>
              Nails By Vicky
            </h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-rose-500 cursor-pointer whitespace-nowrap ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://instagram.com/nailsbyvickyg"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-rose-400 text-white text-sm font-semibold rounded-full hover:bg-rose-500 transition-all hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden w-10 h-10 flex items-center justify-center cursor-pointer ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-gray-200/20 pt-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors hover:text-rose-500 cursor-pointer ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://instagram.com/nailsbyvickyg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center px-6 py-3 bg-rose-400 text-white text-base font-semibold rounded-full hover:bg-rose-500 transition-all shadow-lg whitespace-nowrap cursor-pointer"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
