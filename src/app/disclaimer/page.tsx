"use client";
import Header from '../Header';
import Footer from '../Footer';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <Header />
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#014421] mb-8 border-b border-[#014421]/10 pb-4">
          AI‑Assisted Content & Assessment Disclaimer
        </h1>
        
        <div className="prose prose-lg text-[#014421]/80">
          <p className="mb-6 font-medium">
            Crescere Strategies LLC (“we,” “us,” or “our”) provides leadership, organizational development, and assessment services that may include reports, dashboards, articles, tools, and other materials generated in whole or in part with the assistance of artificial intelligence (“AI”) technologies and standardized psychological instruments such as affect and personality measures.
          </p>
          <p className="mb-10 font-bold p-4 bg-[#014421]/5 rounded-lg border border-[#014421]/10">
            By using this website, our assessments, or any related services, you acknowledge and agree to the following:
          </p>

          <div className="mb-10">
            <h3 className="text-xl font-bold text-[#014421] mb-3">1. AI‑Assisted Content</h3>
            <p className="mb-4">
              Some content and reports made available through this site or our services are prepared with the assistance of AI tools. These tools may use probabilistic methods and public or third‑party data sources.
            </p>
            <p className="mb-4">
              While we review and edit AI‑assisted outputs where feasible, we cannot guarantee that any AI‑generated or AI‑supported content is free from errors, omissions, bias, or outdated information. All such content is provided “as is” and “as available,” without warranties of any kind, whether express or implied.
            </p>
            <p>
              You are responsible for independently evaluating the accuracy, completeness, and suitability of all information before relying on it or making decisions based on it.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-bold text-[#014421] mb-3">2. Non‑Clinical, Non‑Medical Use of Assessments</h3>
            <p className="mb-4">
              Any psychological instruments used in our practice (including, but not limited to, the Positive and Negative Affect Schedule and related affect or personality measures) are administered solely for organizational, leadership, coaching, and educational purposes.
            </p>
            <p className="mb-4">
              Our assessments and reports are <strong>not</strong> designed to, and do <strong>not</strong>, diagnose, treat, or prevent any medical, psychiatric, or psychological condition, and do not constitute psychotherapy, medical care, or mental health treatment.
            </p>
            <p className="mb-4">
              Use of our assessments and reports does <strong>not</strong> create a doctor–patient, therapist–client, or other licensed healthcare relationship between you and Crescere Strategies LLC or any of its consultants.
            </p>
            <p className="text-red-800 bg-red-50 p-4 rounded-lg text-sm">
              <strong>Important:</strong> If you are experiencing distress, crisis, or concerns about your mental or physical health, you should seek evaluation and care from a qualified, licensed healthcare professional in your jurisdiction. If you are in crisis, contact your local emergency services or crisis hotline immediately.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-bold text-[#014421] mb-3">3. No Professional Advice; No Guarantee of Results</h3>
            <p className="mb-4">
              All information and recommendations provided through this site, our assessments, and our reports are for <strong>informational and educational purposes only</strong> and do not constitute legal, medical, tax, financial, or other professional advice.
            </p>
            <p className="mb-4">
              You should obtain advice from appropriately qualified professionals who are familiar with your specific circumstances before acting on any information obtained from us.
            </p>
            <p>
              We do not guarantee any particular outcome, result, or improvement in performance, wellbeing, or organizational metrics arising from the use of our services, assessments, or reports.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-bold text-[#014421] mb-3">4. Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by applicable law, Crescere Strategies LLC and its owners, employees, and contractors shall not be liable for any direct, indirect, incidental, consequential, special, exemplary, or punitive damages arising out of or in connection with your use of this website, our assessments, AI‑assisted content, or any reports or recommendations, even if advised of the possibility of such damages.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
