'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useModal } from './ModalContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useModal();

  return (
    <header className="fixed w-full z-50 bg-crescere-cream/95 backdrop-blur-md border-b border-crescere-green/10 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-display font-bold text-2xl text-crescere-green tracking-tight">
          Crescere Strategies <span className="text-crescere-gold">LLC</span>
        </Link>
        <nav className="hidden md:flex gap-8 font-medium text-crescere-green items-center">
          <Link href="/insights" className="hover:text-crescere-gold transition">Leadership Lab</Link>
          <button onClick={openModal} className="px-5 py-2 bg-crescere-green text-white rounded-sm hover:bg-crescere-gold transition shadow-md">
            Request A Briefing
          </button>
        </nav>
        <button className="md:hidden text-crescere-green" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
    </header>
  );
};
export default Header;
