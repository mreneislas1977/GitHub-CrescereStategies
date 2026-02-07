import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-crescere-green text-white py-16 px-6 border-t border-white/10">
      <div className="container mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display font-bold text-2xl mb-6">Crescere Strategies</h3>
          <p className="text-crescere-cream/70 leading-relaxed">
            Elevating executive leadership through rigorous research and psychological insight.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-crescere-gold uppercase tracking-widest text-sm">Navigation</h4>
          <ul className="space-y-4 text-crescere-cream/80">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/insights" className="hover:text-white transition">Leadership Lab</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-crescere-gold uppercase tracking-widest text-sm">Connect</h4>
          <div className="flex gap-6">
            <a href="#" className="hover:text-crescere-gold transition text-2xl"><FaLinkedin /></a>
            <a href="#" className="hover:text-crescere-gold transition text-2xl"><FaTwitter /></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-16 pt-8 border-t border-white/5 text-center text-crescere-cream/40 text-sm">
        &copy; 2026 Crescere Strategies LLC. All Rights Reserved.
      </div>
    </footer>
  );
};
export default Footer;
