import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <Header />
      <main className="pt-32 pb-20 px-6 max-w-3xl mx-auto text-[#014421]">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-green">
          <p className="mb-4 text-opacity-80">Effective Date: February 2026</p>
          <p className="mb-6">
            Crescere Strategies LLC ("we", "our", or "us") respects your privacy and is committed to protecting the personal and executive data you share with us through our assessment tools (OCEAN, PANAS, Financial Intel).
          </p>
          
          <h3 className="text-xl font-bold mt-8 mb-4">1. Data Collection</h3>
          <p className="mb-4">
            We collect information you provide directly to us, including your name, email address, and psychometric/financial data input into our Leadership Lab tools.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">2. Use of Information</h3>
          <p className="mb-4">
            We use your data solely to generate executive intelligence reports and to communicate with you regarding your strategic development. We do not sell your data to third parties.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">3. Data Security</h3>
          <p className="mb-4">
            We implement industry-standard security measures to protect your information. Your assessment results are stored in a secure, encrypted database environment.
          </p>
          
          <h3 className="text-xl font-bold mt-8 mb-4">4. Contact Us</h3>
          <p>
            If you have questions about this Privacy Policy, please contact us at mrene@crescere-strat.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
