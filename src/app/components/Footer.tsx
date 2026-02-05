import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-crescere-green text-crescere-cream py-16 border-t border-crescere-gold/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Branding & Mission */}
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-6">CRESCERE STRATEGIES</h3>
            <p className="max-w-sm opacity-80 font-body leading-relaxed">
              Mastering the group dynamics of non-profits and start-ups. We help leaders align boards, funders, and staff for unstoppable growth.
            </p>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="font-display font-bold text-crescere-gold mb-6 uppercase tracking-widest text-sm">Sectors</h4>
            <ul className="space-y-4 font-body opacity-80">
              <li>Early-Stage Start-ups</li>
              <li>Non-Profit Organizations</li>
              <li>Foundation Governance</li>
              <li>Founder-Led Enterprises</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-crescere-gold mb-6 uppercase tracking-widest text-sm">Connect</h4>
            <ul className="space-y-4 font-body opacity-80">
              <li><Link href="#contact" className="hover:text-crescere-gold transition">Request Briefing</Link></li>
              <li><Link href="/portfolio" className="hover:text-crescere-gold transition">Insights Portfolio</Link></li>
              <li><a href="https://linkedin.com" className="hover:text-crescere-gold transition">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm opacity-60">
          <p>© {new Date().getFullYear()} Crescere Strategies LLC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
