import React from 'react';
import { Award, TrendingUp, ShieldCheck, Zap, Linkedin, BookOpen } from 'lucide-react';

const LeadershipBio = () => {
  return (
    <section className="py-24 bg-white border-t border-[#5c4033]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column: Headshot & Identity */}
          <div className="lg:w-1/3">
            <div className="mb-8 overflow-hidden rounded-lg bg-[#5c4033]/5 border border-[#C5A059]/20 shadow-inner group">
               <img 
                 src="/rene-headshot.jpg" 
                 alt="M. René Islas" 
                 className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
               />
            </div>
            
            <h2 style={{ color: '#014421' }} className="text-3xl font-bold tracking-tighter mb-1">
              M. RENÉ ISLAS
            </h2>
            <p style={{ color: '#C5A059' }} className="text-sm font-bold uppercase tracking-[0.2em] mb-6">
              Founder & CEO
            </p>

            {/* Social Links */}
            <div className="flex gap-6 mb-8">
              <a href="https://linkedin.com/in/mreneislas" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#014421] hover:text-[#C5A059] transition-colors">
                <Linkedin size={14} /> LinkedIn
              </a>
              <a href="https://mreneislas.substack.com" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#014421] hover:text-[#C5A059] transition-colors">
                <BookOpen size={14} /> Substack
              </a>
            </div>

            <p className="text-gray-700 leading-relaxed font-light mb-6">
              An education executive with over 25 years of experience turning federal policy into measurable impact. 
              René specializes in leading through <span className="italic font-medium text-[#014421]">"productive discomfort"</span>—challenging assumptions to build consensus and drive sustainable, evidenced-based results.
            </p>

            <div className="pt-6 border-t border-[#5c4033]/10">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-3">Education</p>
              <p className="text-sm text-gray-700 font-medium italic mb-1 text-balance">MBA — Western Governors University</p>
              <p className="text-sm text-gray-700 font-medium italic text-balance">BA, Political Science & Sociology — Whittier College</p>
            </div>
          </div>

          {/* Right Column: Strategic Impact */}
          <div className="lg:w-2/3">
            <h3 style={{ color: '#014421' }} className="text-2xl font-bold mb-10 italic">
              Proven Strategic <span style={{ color: '#C5A059' }}>Impact</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck size={18} className="text-[#C5A059]" />
                  <h4 className="font-bold text-[#014421] uppercase text-[10px] tracking-widest">Federal Policy & Law</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed border-l border-[#C5A059]/30 pl-4">
                  Architected multiple K-12 laws and managed nearly $30 billion in federal funding as Chief of Staff for the Office of Elementary and Secondary Education.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp size={18} className="text-[#C5A059]" />
                  <h4 className="font-bold text-[#014421] uppercase text-[10px] tracking-widest">Systemic Growth</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed border-l border-[#C5A059]/30 pl-4">
                  Drove 100% membership growth at the National Association for Gifted Children, scaling impact from 2,000 to over 4,000 individuals.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <Award size={18} className="text-[#C5A059]" />
                  <h4 className="font-bold text-[#014421] uppercase text-[10px] tracking-widest">Operational Efficiency</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed border-l border-[#C5A059]/30 pl-4">
                  Utilized data-driven planning at the National Psoriasis Foundation to save over $500,000 in operational costs within the first year.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <Zap size={18} className="text-[#C5A059]" />
                  <h4 className="font-bold text-[#014421] uppercase text-[10px] tracking-widest">Public-Private Innovation</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed border-l border-[#C5A059]/30 pl-4">
                  Launched the "Teacher-to-Teacher" partnership, creating a scalable national network to improve instructional practice across thousands of educators.
                </p>
              </div>
            </div>

            {/* Philosophy Callout */}
            <div className="mt-16 p-10 bg-[#014421] text-[#fdfbf5] rounded-br-[60px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/10 rounded-full -mr-16 -mt-16"></div>
              <h4 style={{ color: '#C5A059' }} className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6">Disciplined Leadership</h4>
              <p className="text-xl font-light leading-relaxed italic relative z-10">
                "René specializes in leading through <span className="text-[#C5A059]">productive discomfort</span>—challenging assumptions to build consensus and drive sustainable, evidenced-based results."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadershipBio;
