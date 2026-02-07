import React from 'react';

const Stakeholders = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="bg-crescere-green p-12 md:p-20 rounded-sm relative overflow-hidden text-white">
          <div className="max-w-3xl relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Built for Visionaries.</h2>
            <p className="text-xl text-crescere-cream/80 mb-10 leading-relaxed">
              We partner with Board of Directors, CEOs, and Private Equity firms to ensure that leadership transitions and strategic pivots are seamless and successful.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale brightness-200">
              {/* Add logos or partner names here later */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Stakeholders;
