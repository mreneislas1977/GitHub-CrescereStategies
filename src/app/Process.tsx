import React from 'react';

const PathwayGraphic = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
      <svg viewBox="0 0 800 500" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Grid Pattern - Subtly matching your Hero grid */}
        <defs>
          <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#014421" strokeWidth="0.2" opacity="0.1"/>
          </pattern>
        </defs>
        <rect width="800" height="500" fill="url(#smallGrid)" />

        {/* The Central GEM Core - Lonergan's Framework */}
        <circle cx="400" cy="250" r="60" fill="#014421" />
        <text x="400" y="245" textAnchor="middle" fill="#fdfbf5" fontSize="14" fontWeight="bold" className="uppercase tracking-tighter">GEM</text>
        <text x="400" y="262" textAnchor="middle" fill="#C5A059" fontSize="10" className="uppercase tracking-widest">Cognitive Engine</text>

        {/* The Connection Lines (The "Bridge") */}
        <g stroke="#014421" strokeWidth="1" strokeDasharray="4 4" opacity="0.3">
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <line 
              key={angle}
              x1="400" y1="250" 
              x2={400 + 180 * Math.cos((angle * Math.PI) / 180)} 
              y2={250 + 180 * Math.sin((angle * Math.PI) / 180)} 
            />
          ))}
        </g>

        {/* The Pathway Nodes */}
        {/* STUDY */}
        <g transform="translate(400, 70)">
          <rect x="-70" y="-30" width="140" height="60" stroke="#014421" fill="white" strokeWidth="2"/>
          <text y="-5" textAnchor="middle" fill="#014421" fontSize="14" fontWeight="bold">01 STUDY</text>
          <text y="15" textAnchor="middle" fill="#C5A059" fontSize="9" fontWeight="bold" className="uppercase">Experience</text>
        </g>

        {/* UNDERSTAND */}
        <g transform="translate(620, 160)">
          <rect x="-70" y="-30" width="140" height="60" stroke="#014421" fill="white" strokeWidth="1"/>
          <text y="-5" textAnchor="middle" fill="#014421" fontSize="14" fontWeight="bold">02 UNDERSTAND</text>
          <text y="15" textAnchor="middle" fill="#C5A059" fontSize="9" fontWeight="bold" className="uppercase">Understanding</text>
        </g>

        {/* DREAM */}
        <g transform="translate(620, 340)">
          <rect x="-70" y="-30" width="140" height="60" stroke="#C5A059" fill="white" strokeWidth="2"/>
          <text y="-5" textAnchor="middle" fill="#014421" fontSize="14" fontWeight="bold">03 DREAM</text>
          <text y="15" textAnchor="middle" fill="#C5A059" fontSize="9" fontWeight="bold" className="uppercase">Judgment</text>
        </g>

        {/* PLAN */}
        <g transform="translate(400, 430)">
          <rect x="-70" y="-30" width="140" height="60" stroke="#014421" fill="white" strokeWidth="1"/>
          <text y="-5" textAnchor="middle" fill="#014421" fontSize="14" fontWeight="bold">04 PLAN</text>
          <text y="15" textAnchor="middle" fill="#C5A059" fontSize="9" fontWeight="bold" className="uppercase">Decision</text>
        </g>

        {/* DO */}
        <g transform="translate(180, 340)">
          <rect x="-70" y="-30" width="140" height="60" stroke="#014421" fill="white" strokeWidth="1"/>
          <text y="-5" textAnchor="middle" fill="#014421" fontSize="14" fontWeight="bold">05 DO</text>
          <text y="15" textAnchor="middle" fill="#C5A059" fontSize="9" fontWeight="bold" className="uppercase">Action</text>
        </g>

        {/* REVIEW */}
        <g transform="translate(180, 160)">
          <rect x="-70" y="-30" width="140" height="60" stroke="#014421" fill="white" strokeWidth="1"/>
          <text y="-5" textAnchor="middle" fill="#014421" fontSize="14" fontWeight="bold">06 REVIEW</text>
          <text y="15" textAnchor="middle" fill="#C5A059" fontSize="9" fontWeight="bold" className="uppercase">Evaluation</text>
        </g>

        {/* Connecting Circular Arrow (The Loop) */}
        <path 
          d="M 400 30 A 220 220 0 1 1 399 30" 
          stroke="#014421" 
          strokeWidth="0.5" 
          strokeDasharray="10 5" 
          opacity="0.5"
        />
      </svg>
    </div>
  );
};

export default PathwayGraphic;
