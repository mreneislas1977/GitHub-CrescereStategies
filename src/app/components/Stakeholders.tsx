import React from 'react';

const Stakeholders: React.FC = () => {
  const stakeholderGroups = [
    { name: "Board Members", icon: "⚖️", detail: "Navigating governance vs. management friction." },
    { name: "Funders & VCs", icon: "💰", detail: "Managing high-growth expectations and reporting." },
    { name: "Major Donors", icon: "🤝", detail: "Aligning philanthropic intent with mission impact." },
    { name: "Core Staff", icon: "👥", detail: "Bridging the gap between vision and daily execution." }
  ];

  return (
    <section className="py-20 bg-crescere-green text-crescere-cream">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Expert Navigation Across the Ecosystem
          </h2>
          <p className="font-body text-lg opacity-90 leading-relaxed">
            Success in the non-profit and start-up sectors requires more than just internal leadership. 
            It requires the mastery of complex group dynamics across four critical pillars.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stakeholderGroups.map((group) => (
            <div 
              key={group.name} 
              className="bg-white/5 border border-crescere-gold/20 p-8 rounded-xl hover:border-crescere-gold/60 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{group.icon}</div>
              <h3 className="font-display font-bold text-crescere-gold text-xl mb-2">{group.name}</h3>
              <p className="font-body text-sm opacity-80 leading-relaxed">
                {group.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 py-8 border-t border-crescere-gold/20 text-center">
          <p className="text-xl font-display italic text-crescere-gold">
            "We help leaders align these groups into a single, unified engine for growth."
          </p>
        </div>
      </div>
    </section>
  );
};
export default Stakeholders;
