import React from 'react';

const processSteps = [
  { 
    step: '01', 
    title: 'Stakeholder Audit', 
    description: 'A deep-dive assessment of the power dynamics and communication gaps between your Board, funders, and internal team.'
  },
  { 
    step: '02', 
    title: 'Alignment Strategy', 
    description: 'Designing bespoke protocols to synchronize board governance, donor expectations, and staff culture under a unified vision.'
  },
  { 
    step: '03', 
    title: 'Dynamic Coaching', 
    description: 'Ongoing advisory for leaders to master the art of navigating high-stakes meetings and interpersonal friction within their ecosystem.'
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-crescere-green text-crescere-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold">Our Process</h2>
          <div className="w-16 h-1 bg-crescere-gold mx-auto mt-6"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {processSteps.map((item, index) => (
            <div key={index} className="relative p-8 border border-crescere-gold/20 rounded-xl hover:bg-white/5 transition-all">
              <div className="text-6xl font-display font-bold text-crescere-gold/20 absolute top-4 right-4">
                {item.step}
              </div>
              <h3 className="text-2xl font-display font-bold text-crescere-gold mb-4 relative z-10">
                {item.title}
              </h3>
              <p className="font-body text-crescere-cream/80 relative z-10">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
/Services.tsx

import React from 'react';

// ... (Keep your CompassIcon, UsersIcon, and TrendingUpIcon code here)

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
    <div className="text-center group p-6 hover:bg-white transition-all duration-300 rounded-xl hover:shadow-lg">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-crescere-green/5 mx-auto group-hover:bg-crescere-gold/20 transition-colors">
            {icon}
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold text-crescere-green">{title}</h3>
        <p className="mt-4 font-body text-crescere-brown/80 leading-relaxed">{description}</p>
    </div>
);

const Services: React.FC = () => {
  const servicesData = [
    {
      icon: <CompassIcon className="h-8 w-8 text-crescere-green" />,
      title: "Strategic Execution",
      description: "We translate ambitious goals into actionable plans, ensuring implementation that aligns every part of your organization to a unified vision for success."
    },
    {
      icon: <UsersIcon className="h-8 w-8 text-crescere-green" />,
      title: "Leadership Development",
      description: "We cultivate resilient, visionary leaders. Through bespoke coaching, we empower your team to navigate complexity and inspire high performance."
    },
    {
      icon: <TrendingUpIcon className="h-8 w-8 text-crescere-green" />,
      title: "Sustainable Growth",
      description: "We architect frameworks for long-term success. By optimizing strategies, we help you build a resilient organization poised for continuous growth."
    }
  ];

  return (
    <section id="services" className="py-24 bg-crescere-cream/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-crescere-green">
            Our Core Services
          </h2>
          <div className="w-16 h-1 bg-crescere-gold mx-auto mt-4"></div>
          <p className="mt-6 text-lg font-body text-crescere-brown/80">
            A comprehensive suite of strategic interventions designed to address critical challenges and unlock your organization's potential.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-x-8 gap-y-12">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
