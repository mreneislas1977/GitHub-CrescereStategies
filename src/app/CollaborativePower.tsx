import React from 'react';
import { FaFingerprint, FaTachometerAlt, FaChessKnight } from 'react-icons/fa';

const CollaborativePower = () => {
  const features = [
    {
      icon: <FaFingerprint />,
      title: "Psychological Precision",
      desc: "We analyze the human variables that data alone cannot capture."
    },
    {
      icon: <FaTachometerAlt />,
      title: "Operational Velocity",
      desc: "Accelerate decision-making with high-fidelity executive intelligence."
    },
    {
      icon: <FaChessKnight />,
      title: "Strategic Depth",
      desc: "Move beyond tactics into long-term organizational dominance."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-crescere-green mb-4">The Collaborative Power</h2>
          <div className="w-20 h-1 bg-crescere-gold mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div key={i} className="p-8 border border-gray-100 rounded-sm hover:shadow-xl transition-all group">
              <div className="text-3xl text-crescere-gold mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-crescere-green mb-4">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CollaborativePower;
