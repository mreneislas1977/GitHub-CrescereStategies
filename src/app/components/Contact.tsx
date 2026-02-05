'use client';
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-crescere-cream">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-crescere-green mb-8">
          Start the Conversation
        </h2>
        <p className="text-lg text-crescere-brown/80 mb-8 max-w-2xl mx-auto">
          Ready to align your stakeholders and accelerate growth?
        </p>
        <a href="mailto:info@crescere.com" className="inline-block bg-crescere-gold text-crescere-green px-8 py-4 rounded font-bold uppercase tracking-widest hover:brightness-110 transition">
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Contact;
