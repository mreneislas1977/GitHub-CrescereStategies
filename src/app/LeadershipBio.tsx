import React from 'react';
import { Award, TrendingUp, ShieldCheck, Zap, Linkedin, BookOpen } from 'lucide-react';

const LeadershipBio = () => {
  return (
    <section className="py-24 bg-[#fdfbf5] border-t border-[#5c4033]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
          
          {/* Right Column: Headshot (Now in Color) */}
          <div className="lg:w-1/3">
            <div className="mb-8 overflow-hidden rounded-lg border-2 border-[#C5A059] shadow-xl">
               <img 
                 src="/rene-headshot.png" 
                 alt="M. René Islas" 
                 className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
               />
            </div>
            
            {/* Social Links under Image */}
            <div className="flex justify-center gap-8 py-4 bg-white rounded-lg border border-[#5c4033]/10 shadow-sm">
              <a href="https://linkedin.com/in/mreneislas" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#014421] hover:text-[#C5A059] transition-colors">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="https://mreneislas.substack.com" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#014421] hover:text-[#C5A059] transition-colors">
                <BookOpen size={16} /> Substack
              </a>
            </div>
          </div>

          {/* Left Column: Full Narrative Content */}
          <div className="lg:w-2/3">
            <div className="mb-10">
              <h2 style={{ color: '#014421' }} className="text-4xl font-bold tracking-tighter mb-2">
                M. RENÉ ISLAS
              </h2>
              <p style={{ color: '#C5A059' }} className="text-sm font-bold uppercase tracking-[0.3em] mb-8">
                Founder & CEO
              </p>
              
              <div className="space-y-6 text-gray-800 leading-relaxed font-light text-lg">
                <p>
                  M. René Islas is an education executive with over 25 years of experience turning federal policy into measurable impact for K-12 students and educators. His career is defined by a capacity to navigate high-stakes environments—including the U.S. Department of Education, the Department of Defense Education Activity (DoDEA), and the national non-profit sector—to build durable systems that foster growth.
                </p>
                <p>
                  René’s work centers on the practical application of strategy and evidence-based methodology to achieve organizational excellence. He specializes in leading through <span className="italic font-medium text-[#014421]">"productive discomfort"</span>—challenging assumptions to build consensus and drive sustainable results.
                </p>
              </div>
            </div>

            {/* Strategic Impact Grid */}
            <h3 style={{ color: '#014421' }} className="text-xl font-bold mb-8 uppercase tracking-widest border-b border-[#C5A059]/30 pb-2">
              Proven Strategic Impact
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck size={20} className="text-[#C5A059]" />
                  <h4 className="font-bold text-[#014421] text-xs tracking-widest uppercase">Federal Policy & Law</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Architected multiple K-12 laws and managed nearly $30 billion in federal funding as Chief of Staff for OESE.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp size={20} className="text-[#C5A059]" />
                  <h4 className="font-bold text-[#014421] text-xs tracking-widest uppercase">Systemic Growth</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Grew association membership by 100 percent—from fewer than 2,000 to more than 4,000 individuals at NAGC.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <Award size={20} className="text-[#C5A059]" />
                  <h4 className="font-bold text-[#014421] text-xs tracking-widest uppercase">Organizational Efficiency</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Identified operational efficiencies at the National Psoriasis Foundation that saved over $500,000 in the first year.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <Zap size={20} className="text-[#C5A059]" />
                  <h4 className="font-bold text-[#014421] text-xs tracking-widest uppercase">Public-Private Innovation</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Created the "Teacher-to-Teacher" partnership, supporting thousands of educators nationwide to improve instruction.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white p-8 rounded-lg border border-[#5c4033]/10 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-3">Education</h4>
                  <p className="text-sm text-gray-700 font-medium italic">MBA — Western Governors University</p>
                  <p className="text-sm text-gray-700 font-medium italic">BA, Political Science & Sociology — Whittier College (Young Alumni Award Winner)</p>
                  <p className="text-sm text-gray-700 font-medium italic">College Prepatory Diploma -  Salpointe Catholic High School (Alumni Hall of Fame Member)</p>
                </div>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadershipBio;
