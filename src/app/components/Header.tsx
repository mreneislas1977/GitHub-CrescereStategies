'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Insights', href: '/insights', isHighlight: true },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || isMenuOpen ? 'bg-crescere-green py-4 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Brand */}
        <Link href="/" className="font-display text-2xl font-bold text-white z-50">
          CRESCERE<span className="text-crescere-gold">.</span>
        </Link>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="md:hidden z-50 text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="space-y-2">
            <span className={`block w-8 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-8 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-sm font-bold uppercase tracking-widest transition ${
                link.isHighlight ? 'text-crescere-gold border border-crescere-gold px-4 py-2 rounded hover:bg-crescere-gold hover:text-crescere-green' : 'text-crescere-cream hover:text-crescere-gold'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="#contact" className="bg-crescere-gold text-crescere-green px-5 py-2 rounded font-bold hover:brightness-110 transition text-sm uppercase tracking-widest">
            Contact
          </Link>
        </div>

        {/* Mobile Full-Screen Overlay */}
        <div className={`fixed inset-0 bg-crescere-green flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-display font-bold text-white hover:text-crescere-gold transition"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className="bg-crescere-gold text-crescere-green px-10 py-4 rounded-full font-bold text-xl"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
