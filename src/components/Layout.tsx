import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-surface/90 backdrop-blur-md shadow-sm h-20' : 'bg-transparent h-24'
    }`}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 h-full flex justify-between items-center">
        <Link to="/" className="font-display text-xl md:text-2xl font-bold text-primary active:scale-95 transition-transform">
          D' Roofing Group
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-label-bold transition-all duration-300 hover:text-secondary ${
                location.pathname === link.href 
                  ? 'text-secondary border-b-2 border-secondary pb-1' 
                  : 'text-on-surface-variant'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-secondary text-white text-label-bold px-6 py-3 rounded-lg hover:bg-secondary-container transition-all active:scale-95 shadow-sm"
          >
            Free Estimate
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-surface border-t border-outline-variant p-6 md:hidden flex flex-col space-y-4 shadow-lg"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-headline-md ${
                location.pathname === link.href ? 'text-secondary' : 'text-on-surface'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-secondary text-white text-center py-4 rounded-lg font-bold"
          >
            Free Estimate
          </Link>
        </motion.div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary-container text-white py-20 border-t border-outline-variant/10">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/" className="font-display text-2xl font-bold mb-6 block">
            D' Roofing Group
          </Link>
          <p className="text-on-primary-container max-w-sm mb-6">
            Premium coastal roofing solutions built on a foundation of trust, quality, and structural integrity.
          </p>
          <div className="space-y-3 text-caption text-on-primary-container">
            <div className="flex items-start gap-2 justify-center md:justify-start">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <span>323 Arpt Rd S,<br />Naples, FL 34104</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Phone size={18} className="flex-shrink-0" />
              <a href="tel:2392567788" className="hover:text-secondary transition-colors underline decoration-secondary/30">(239) 256-7788</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-8 text-on-primary-container">Quick Links</h4>
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className="text-body-md hover:text-secondary transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 mt-16 pt-8 border-t border-on-primary-container/10 text-center">
        <p className="text-caption text-on-primary-container">
          © {new Date().getFullYear()} D' Roofing Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
