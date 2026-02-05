import React from 'react';

const processSteps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description: "We dive deep into your organizational structure, analyzing board dynamics and operational bottlenecks."
  },
  {
    number: "02",
    title: "Strategic Alignment",
    description: "We realign your stakeholders—board, staff, and funders—around a unified vision and actionable roadmap."
  },
  {
    number: "03",
    title: "Execution & Oversight",
    description: "We don't just plan; we help implement. Our team provides fractional leadership to guide the transformation."
  },
  {
    number: "04",
    title: "Sustainable Growth",
    description: "We establish frameworks that ensure long-term stability and continuous improvement after our engagement ends."
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-crescere-cream text-crescere-green">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Process</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            A proven methodology designed to turn internal friction into forward momentum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl font-bold text-crescere-gold/20 mb-4 absolute top-4 right-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3 relative z-10">{step.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed relative z-10">
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
