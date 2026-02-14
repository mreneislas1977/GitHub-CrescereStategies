'use client';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#014421] text-[#fdfbf5] py-12 border-t border-[#C5A059]/30">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Column 1: Brand & Copyright */}
          <div>
            <h3 className="text-[#C5A059] font-serif font-bold text-lg mb-4">
              CRESCERE STRATEGIES
            </h3>
            <p className="text-sm opacity-60">
              &copy; {new Date().getFullYear()} Crescere Strategies LLC.<br />
              All Rights Reserved.
            </p>
          </div>

          {/* Column 2: Contact / Location */}
          <div>
            <h4 className="text-[#C5A059] font-bold uppercase text-xs tracking-widest mb-4">
              Headquarters
            </h4>
            <p className="text-sm opacity-80 leading-relaxed">
              Alexandria, Virginia<br />
              United States
            </p>
          </div>

          {/* Column 3: Legal Links */}
          <div>
            <h4 className="text-[#C5A059] font-bold uppercase text-xs tracking-widest mb-4">
              Legal
            </h4>
            <ul className="space-y-2 text-sm opacity-60">
              <li>
                <a href="#" className="hover:text-[#C5A059] transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C5A059] transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#fdfbf5]/10 text-center text-xs opacity-40">
          <p>Proprietary diagnostic engines for quantifying executive performance and organizational health.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
