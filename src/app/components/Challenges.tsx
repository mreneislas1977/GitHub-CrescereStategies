import React from 'react';

const Challenges: React.FC = () => {
  const challengesData = [
    { 
      title: "Board vs. Staff Friction", 
      description: "When the line between governance and daily management blurs, it creates organizational paralysis. We establish clear protocols to align board wisdom with staff execution." 
    },
    { 
      title: "Funder & Donor Pressure", 
      description: "Balancing major donor expectations with your core mission is a high-stakes tightrope walk. We provide strategies to navigate these power dynamics with integrity." 
    },
    { 
      title: "Founder & Team Alignment", 
      description: "As start-ups scale, group dynamics shift rapidly. We help founders maintain cultural cohesion and leadership trust during periods of explosive growth." 
    },
  ];

  return (
    <section id="challenges" className="py-24 bg-crescere-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-crescere-green">
              From Conflict <br/> to <span className="text-crescere-gold">Collaborative Power</span>
            </h2>
          </div>
          <p className="max-w-sm text-lg font-body text-crescere-brown/70 border-l-2 border-crescere-gold pl-6">
            We turn interpersonal friction and stakeholder politics into strategic advantages.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challengesData.map((challenge, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg border-t-4 border-crescere-brown hover:border-crescere-gold transition-all duration-300 shadow-sm"
            >
              <h3 className="font-display text-2xl font-bold text-crescere-green mb-4">
                {challenge.title}
              </h3>
              <p className="font-body text-crescere-brown/80 leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
