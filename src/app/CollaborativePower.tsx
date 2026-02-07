'use client';
import React from 'react';
import { FaFingerprint, FaUsers, FaChartLine } from 'react-icons/fa';

const CollaborativePower = () => {
  const features = [
    {
      icon: <FaFingerprint />,
      title: "Executive Profiling",
      desc: "Deep-dive behavioral analytics to ensure the right leaders are in the right seats to execute your vision."
    },
    {
      icon: <FaUsers />,
      title: "Leadership Development",
      desc: "Cultivating high-potential talent through rigorous coaching and psychological insight."
    },
    {
      icon: <FaChartLine />,
      title: "Strategic Momentum",
      desc: "Turning leadership capability into measurable growth and sustained market dominance."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-crescere-gold uppercase tracking-[0.3em] font-bold text-sm block mb-4">The Crescere Advantage</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-crescere-green mb-6">Collaborative Power</h2>
          <div className="w-24 h-1.5 bg-crescere-gold mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div key={i} className="p-10 border border-gray-100 rounded-sm hover:shadow-2xl transition-all duration-300 group bg-crescere-cream/10">
              <div className="text-4xl text-crescere-gold mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold text-crescere-green mb-4">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed italic">
                "{f.desc}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CollaborativePower;
