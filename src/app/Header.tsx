import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <nav style={{ backgroundColor: '#014421' }} className="sticky top-0 z-50 px-6 py-3 border-b border-[#C5A059]/40 shadow-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo & Centered Home Link Stack */}
        <div className="flex flex-col items-center">
          <Link href="/" className="text-xl font-bold tracking-tighter italic text-[#fdfbf5] leading-none">
            CRESCERE<span style={{ color: '#C5A059' }}>STRATEGIES</span>
          </Link>
          <Link 
            href="/" 
            className="text-[10px] uppercase tracking-[0.3em] font-bold mt-1.5 transition-colors hover:text-[#fdfbf5]"
            style={{ color: '#C5A059' }}
          >
            Home
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/leadership-lab" className="text-sm font-medium text-[#fdfbf5] hover:text-[#C5A059] transition-colors">
            Leadership Lab
          </Link>
          <Link href="/ocean" className="text-sm font-medium text-[#fdfbf5] hover:text-[#C5A059] transition-colors">
            OCEAN
          </Link>
          <Link href="/panas" className="text-sm font-medium text-[#fdfbf5] hover:text-[#C5A059] transition-colors">
            PANAS-X
          </Link>
          {/* Action Button */}
          <Link 
            href="/contact" 
            style={{ backgroundColor: '#C5A059' }} 
            className="px-5 py-2 text-[#014421] text-xs font-bold uppercase tracking-widest rounded hover:bg-[#fdfbf5] transition-all ml-4"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
