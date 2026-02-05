'use client';

import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const animationClasses = 'transition-all duration-1000 ease-out';
  const hiddenState = 'opacity-0 translate-y-8';
  const visibleState = 'opacity-100 translate-y-0';

  return (
    <section className="bg-crescere-green text-crescere-cream py-20 md:py-32 overflow-hidden relative border-b border-crescere-gold/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl text-left">
          {/* Logo */}
          <div className={`${animationClasses} ${isMounted ? visibleState : hiddenState}`}>
             {/* Note: Ensure logo.png is in your /public folder */}
            <img 
                src="/logo.png" 
                alt="Crescere Strategies LLC logo" 
                className="w-full max-w-[180px] md:max-w-[300px] h-auto mb-10"
            />
          </div>

          <p 
              className={`text-lg md:text-2xl font-body text-crescere-cream/90 uppercase tracking-widest ${animationClasses} ${isMounted ? visibleState : hiddenState}`} 
              style={{ transitionDelay: '200ms' }}
            >
            Results for enterprises and non-profits.
          </p>
          
          {/* Headlines */}
          <h2 
            className={`mt-6 text-5xl md:text-7xl font-display font-bold text-white leading-tight ${animationClasses} ${isMounted ? visibleState : hiddenState}`} 
            style={{ transitionDelay: '400ms' }}
          >
            Execute Strategy. <br /> 
            <span className="text-crescere-gold">Develop Leaders.</span>
          </h2>
          
          <h3 
            className={`text-3xl md:text-5xl font-display italic font-light text-crescere-cream/80 mt-4 ${animationClasses} ${isMounted ? visibleState : hiddenState}`} 
            style={{ transitionDelay: '600ms' }}
          >
            Achieve Unstoppable Growth.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
