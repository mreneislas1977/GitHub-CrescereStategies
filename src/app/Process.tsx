import React from 'react';

const Process = () => {
  const steps = [
    { num: "01", title: "Discovery", desc: "Immersion into your firm's specific cultural and strategic friction points." },
    { num: "02", title: "Intelligence", desc: "Rigorous executive research and psychological profiling of the landscape." },
    { num: "03", title: "Execution", desc: "Deploying high-impact leadership strategies to catalyze growth." }
  ];

  return (
    <section className="py-24 bg-crescere-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-display font-bold text-crescere-green mb-4">Our Strategic Process</h2>
            <p className="text-gray-600">A refined methodology designed for the complexities of modern leadership.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative p-10 bg-white shadow-sm border-t-4 border-crescere-gold">
              <span className="text-6xl font-display font-black text-gray-50 absolute top-4 right-4 leading-none">
                {s.num}
              </span>
              <h3 className="text-2xl font-bold text-crescere-green mb-4 relative z-10">{s.title}</h3>
              <p className="text-gray-600 relative z-10">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Process;
