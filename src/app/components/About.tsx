import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white text-crescere-green">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">
            Our Mission
          </h2>
          <div className="text-lg md:text-xl leading-relaxed text-crescere-brown/90">
            <p>
              Our mission is to serve as a catalyst for transformation within the
              <strong className="text-crescere-green"> non-profit and early-stage start-up sectors</strong>. 
              We partner with founders and executive directors to navigate the intricate group dynamics 
              that define organizational growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
