"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useModal } from './ModalContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useModal(); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      id="crescere-header-v8"
      className={`fixed w-full z-40 transition-all duration-300 border-b ${
        isScrolled || mobileMenuOpen 
          ? 'bg-[#fdfbf5]/95 backdrop-blur-md shadow-sm border-[#014421]/5 py-4' 
          : 'bg-[#fdfbf5] border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO: Title Case + Gold LLC */}
        <Link href="/" className="z-50 relative group">
           <span className="text-xl md:text-2xl font-bold tracking-tighter text-[#014421]">
             Crescere Strategies <span className="text-[#C5A059]">LLC</span>
           </span>
        </Link>

        {/* DESKTOP NAV: Button links to /leadership-lab */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/leadership-lab"
            className="px-6 py-2.5 bg-[#014421] text-white text-sm font-bold rounded-full hover:bg-[#014421]/90 transition-all shadow-lg flex items-center gap-2"
          >
            Leadership Lab <ChevronRight size={14} />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden z-50 text-[#014421]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* MOBILE NAV OVERLAY */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-[#fdfbf5] z-40 flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-200">
            <Link 
              href="/leadership-lab"
              onClick={() => setMobileMenuOpen(false)}
              className="px-8 py-4 bg-[#014421] text-white font-bold rounded-full text-lg flex items-center gap-2"
            >
              Leadership Lab <ChevronRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
