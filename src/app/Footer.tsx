"use client";
import React from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#014421] text-white pt-16 pb-12 border-t border-[#014421]/20 print:hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* BRAND COLUMN */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold tracking-wider uppercase mb-4 text-[#fdfbf5]">
            Crescere Strategies
          </h3>
          <p className="text-sm text-[#fdfbf5]/70 max-w-sm leading-relaxed mb-6">
            Empirical diagnostic intelligence, executive trait baseline profiling, and organizational strategy audits for high-stakes leadership teams and public safety organizations.
          </p>
          <p className="text-xs text-[#fdfbf5]/50">
            &copy; {new Date().getFullYear()} Crescere Strategies LLC. All Rights Reserved.
          </p>
        </div>

        {/* QUICK NAVIGATION */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-amber-200/80 mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-[#fdfbf5]/80 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/leadership-lab" className="text-[#fdfbf5]/80 hover:text-white transition-colors">
                Leadership Lab
              </Link>
            </li>
            <li>
              <Link href="/onboarding" className="text-[#fdfbf5]/80 hover:text-white transition-colors">
                Master Baseline Intake
              </Link>
            </li>
            <li>
              <Link href="/financial" className="text-[#fdfbf5]/80 hover:text-white transition-colors">
                Financial Audit
              </Link>
            </li>
          </ul>
        </div>

        {/* GOVERNANCE & DISCREET ADMIN LINK */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-amber-200/80 mb-4">
            Governance & Compliance
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy" className="text-[#fdfbf5]/80 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-[#fdfbf5]/80 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="text-[#fdfbf5]/80 hover:text-white transition-colors">
                Disclaimer
              </Link>
            </li>
            
            {/* DISCREET ADMIN VAULT LINK */}
            <li className="pt-3">
              <Link 
                href="/admin" 
                className="inline-flex items-center gap-1.5 text-xs text-amber-200/60 hover:text-amber-200 transition-colors font-mono"
              >
                <Shield size={12} />
                <span>Executive Admin Vault</span>
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
