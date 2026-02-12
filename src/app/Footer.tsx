"use client";
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#014421] text-white/80 py-12 border-t border-white/10 print:hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Column: TITLE CASE + GOLD LLC */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
              Crescere Strategies <span className="text-[#C5A059]">LLC</span>
            </h3>
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Defining the science of executive growth.
              <br/>Alexandria, VA • United States
            </p>
          </div>
          
          {/* Leadership Lab Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Leadership Lab</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/panas" className="hover:text-white transition-colors">PANAS-X Assessment</Link></li>
              <li><Link href="/ocean" className="hover:text-white transition-colors">OCEAN Profile</Link></li>
              <li><Link href="/financial" className="hover:text-white transition-colors">Financial Intel</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/admin" className="hover:text-white transition-colors">Admin Vault</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Crescere Strategies LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
