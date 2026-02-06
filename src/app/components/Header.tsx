'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-crescere-cream/95 backdrop-blur-md border-b border-crescere-green/10 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO SECTION - TEXT ONLY */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-display font-bold text-2xl text-crescere-green tracking-tight group-hover:text-crescere-gold transition-colors">
            Crescere Strategies LLC.
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 font-medium text-crescere-green items-center">
          <Link href="#about" className="hover:text-crescere-gold transition">About</Link>
          <Link href="#solutions" className="hover:text-crescere-gold transition">Solutions</Link>
          <Link href="#process" className="hover:text-crescere-gold transition">Process</Link>
          <Link href="/insights" className="hover:text-crescere-gold transition">Insights</Link>
          <Link href="#contact" className="px-5 py-2 bg-crescere-green text-white rounded-lg hover:bg-opacity-90 transition shadow-md">
            Contact Us
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden text-crescere-green text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-crescere-cream border-b border-crescere-green/10 md:hidden flex flex-col items-center py-8 gap-6 shadow-xl">
            <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="#solutions" onClick={() => setIsOpen(false)}>Solutions</Link>
            <Link href="#process" onClick={() => setIsOpen(false)}>Process</Link>
            <Link href="/insights" onClick={() => setIsOpen(false)}>Insights</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="px-8 py-3 bg-crescere-green text-white rounded-lg font-bold">
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
