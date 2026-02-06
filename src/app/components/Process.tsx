'use client';

import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Deep Discovery",
      description: "We immerse ourselves in your organization to understand the hidden dynamics, cultural nuances, and structural barriers."
    },
    {
      number: "02",
      title: "Strategic Design",
      description: "We co-create a tailored roadmap that aligns your leadership team and defines clear, actionable milestones."
    },
    {
      number: "03",
      title: "Capacity Building",
      description: "We don't just deliver a plan; we train your teams and install the frameworks needed to execute it independently."
    },
    {
      number: "04",
      title: "Sustainable Scale",
      description: "We establish feedback loops and KPIs to ensure the growth is continuous, measurable, and lasting."
    }
  ];

  return (
    <section id="process" className="py-24 bg-crescere-green text-white">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our Approach
          </h2>
          <div className="w-24 h-1 bg-crescere-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Step Number - Small, contained, no overlap */}
              <div className="mb-4 text-crescere-gold font-display font-bold text-2xl border-b border-white/20 pb-2 inline-block">
                {step.number}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-crescere-gold transition-colors">
                {step.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
