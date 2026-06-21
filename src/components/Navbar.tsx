import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const logoUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663029429997/cGLXMiQ6AvZBgN8HMBSubT/brand-logo-2VStEtBsMFFfeLcoathA88.webp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img
              src={logoUrl}
              alt="Unknown Developer"
              className="w-8 h-8"
            />
            <span className="hidden sm:inline font-bold text-lg text-navy-dark" style={{ color: '#232347' }}>
              Unknown Dev
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-teal-primary transition-colors font-medium"
              style={{ '--tw-text-opacity': '1' } as any}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-600 hover:text-teal-primary transition-colors font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-teal-primary transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden sm:inline-block px-6 py-2 border-2 font-medium rounded transition-all duration-300"
            style={{
              borderColor: '#14D8C4',
              color: '#14D8C4',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#14D8C4';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#14D8C4';
            }}
          >
            Get in Touch
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <ChevronDown className="w-6 h-6" style={{ color: '#232347' }} />
          </button>
        </div>
      </div>
    </nav>
  );
}
