'use client';
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default function Insights() {
  return (
    <main className="min-h-screen bg-crescere-cream">
      <Header />
      <div className="pt-32 pb-20 container mx-auto px-6 text-center">
        <h1 className="text-4xl font-display font-bold text-crescere-green">Leadership Lab</h1>
        <p className="mt-4 text-gray-600">Coming Soon: Executive Insights and Strategic Research.</p>
      </div>
      <Footer />
    </main>
  );
}
