import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <Header />
      <main className="pt-32 pb-20 px-6 max-w-3xl mx-auto text-[#014421]">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-green">
          <p className="mb-6">
            By accessing and using the services provided by Crescere Strategies LLC, including the Leadership Lab assessments, you agree to the following terms.
          </p>
          
          <h3 className="text-xl font-bold mt-8 mb-4">1. Services</h3>
          <p className="mb-4">
            Crescere Strategies provides strategic consulting and executive assessment tools. These tools are for informational and developmental purposes only and do not constitute medical or legal advice.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">2. Intellectual Property</h3>
          <p className="mb-4">
            All content, methodologies, and branding on this site are the property of Crescere Strategies LLC. You may not reproduce or redistribute our assessment logic without permission.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">3. Limitation of Liability</h3>
          <p className="mb-4">
            Crescere Strategies is not liable for any decisions made based on the results of our automated assessment tools. Strategic execution remains the responsibility of the client.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
