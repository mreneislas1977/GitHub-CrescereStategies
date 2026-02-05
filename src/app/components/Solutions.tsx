'use client';

import React, { useState } from 'react';
import { FaChartLine, FaUsers, FaLightbulb, FaArrowRight } from 'react-icons/fa';

const solutions = [
  {
    id: 'strategy',
    icon: <FaChartLine />,
    title: "Strategic Planning",
    description: "We help you define clear, actionable goals that align with your mission and drive long-term impact."
  },
  {
    id: 'culture',
    icon: <FaUsers />,
    title: "Organizational Culture",
    description: "We diagnose and heal internal friction, fostering a culture of trust, accountability, and collaboration."
  },
  {
    id: 'innovation',
    icon: <FaLightbulb />,
    title: "Program Innovation",
    description: "We guide you in designing and launching new initiatives that stay ahead of the curve."
  }
];

const Solutions: React.FC = () => {
  const [activeHover, setActiveHover] = useState<string | null>(null);

  return (
    <section id="solutions" className="py-24 bg-white text-crescere-green">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Solutions</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Tailored interventions to unlock your organization's full potential.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((sol) => (
            <div 
              key={sol.id}
              className="group relative p-8 border border-gray-100 rounded-xl hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setActiveHover(sol.id)}
              onMouseLeave={() => setActiveHover(null)}
            >
              <div className={}>
                {sol.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{sol.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {sol.description}
              </p>
              
              <div className={}>
                <span>Learn More</span>
                <FaArrowRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
