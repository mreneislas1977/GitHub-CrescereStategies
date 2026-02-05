import React, { useState, useEffect, useRef } from 'react';

const ArrowIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const Solutions: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const solutions = [
    { normal: "We don't only advise, ", capitalized: "WE INSPIRE." },
    { normal: "We don't only propose solutions, ", capitalized: "WE GUIDE DEEP IMPLEMENTATION." },
    { normal: "Through precision strategy, ", capitalized: "WE PROPEL GROWTH." }
  ];

  return (
    <section id="solutions" ref={sectionRef} className="bg-crescere-green text-crescere-cream py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Our Commitment <br/> to Your Success
            </h2>
            <div className="w-12 h-1 bg-crescere-gold mt-6 mb-4"></div>
            <p className="text-lg font-body text-crescere-cream/80 leading-relaxed">
              Where conventional consulting ends, our partnership begins. We embed ourselves in your mission to ensure strategies are not only designed but flawlessly executed for lasting impact.
            </p>
          </div>
          
          <div className="md:col-span-3 space-y-8">
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <ArrowIcon className="h-6 w-6 text-crescere-gold mt-1.5" />
                </div>
                <p className="ml-6 text-xl md:text-2xl font-body font-medium tracking-wide">
                  <span className="opacity-70">{solution.normal}</span>
                  <br className="md:hidden" />
                  <span
                    className={`
                      font-display font-bold text-crescere-gold
                      transition-all ease-in-out duration-1000 block md:inline
                      ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`
                    }
                    style={{ transitionDelay: `${index * 300}ms` }}
                  >
                    {solution.capitalized}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
