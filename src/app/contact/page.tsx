"use client";
import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      fetch('/api/send-alert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          clientEmail: formData.email,
          testType: `CONTACT FORM: ${formData.subject}`,
          message: `From: ${formData.name}\n\n${formData.message}`
        })
      });

      setTimeout(() => {
        setStatus('success');
        window.scrollTo(0, 0);
      }, 600);

    } catch (error) {
      console.error("Submission error:", error);
      setStatus('success');
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <Header />
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Contact Info */}
          <div>
            <h1 className="text-4xl font-bold text-[#014421] mb-6">Get in Touch</h1>
            <p className="text-lg text-[#014421]/70 mb-10 leading-relaxed">
              We are currently accepting new partnerships for Q1 2026. 
              <br/>For urgent strategic inquiries, please use the direct line.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#014421]/5 rounded-lg text-[#014421]">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#014421]">Email</h3>
                  <a href="mailto:mreneislas@crescere-strat.com" className="text-[#014421]/70 hover:text-[#014421] transition-colors">mreneislas@crescere-strat.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#014421]/5 rounded-lg text-[#014421]">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#014421]">Direct Line</h3>
                  <p className="text-[#014421]/70">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#014421]/5 rounded-lg text-[#014421]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#014421]">Headquarters</h3>
                  <p className="text-[#014421]/70">Alexandria, VA<br/>United States</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#014421]/10">
            {status === 'success' ? (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full mb-6">
                  <CheckCircle className="text-[#014421]" size={48} />
                </div>
                <h2 className="text-2xl font-bold text-[#014421] mb-4">Message Sent</h2>
                <p className="text-[#014421]/60 mb-8">
                  Thank you, {formData.name}.<br/>Our team typically responds within 24 hours.
                </p>
                <button 
                  onClick={() => {
                    setFormData({ name: '', email: '', subject: '', message: '' });
                    setStatus('idle');
                  }}
                  className="px-8 py-3 bg-[#014421]/5 text-[#014421] font-bold rounded-lg hover:bg-[#014421]/10 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 24-HOUR PROMISE BANNER */}
                <div className="flex items-center gap-2 bg-[#014421]/5 p-3 rounded-lg text-sm text-[#014421] mb-6">
                  <Clock size={16} />
                  <span>We typically respond to inquiries within <strong>24 hours</strong>.</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#014421] mb-2 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-4 bg-[#fdfbf5] border border-[#014421]/10 rounded-lg focus:outline-none focus:border-[#014421] transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-[#014421] mb-2 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-4 bg-[#fdfbf5] border border-[#014421]/10 rounded-lg focus:outline-none focus:border-[#014421] transition-all"
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#014421] mb-2 uppercase tracking-wider">Subject</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full p-4 bg-[#fdfbf5] border border-[#014421]/10 rounded-lg focus:outline-none focus:border-[#014421] transition-all"
                  >
                    <option value="" disabled>Select a Topic...</option>
                    <option value="Strategic Consultation">Strategic Consultation</option>
                    <option value="Partnership Inquiry">Partnership Inquiry</option>
                    <option value="Speaking Engagement">Speaking Engagement</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#014421] mb-2 uppercase tracking-wider">Message</label>
                  <textarea 
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full p-4 bg-[#fdfbf5] border border-[#014421]/10 rounded-lg focus:outline-none focus:border-[#014421] transition-all"
                    placeholder="How can we help you grow?"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full py-4 bg-[#014421] text-white font-bold rounded-lg hover:bg-[#014421]/90 transition-all shadow-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <><Loader2 className="animate-spin mr-2" /> Sending...</>
                  ) : (
                    <><Send className="mr-2" size={20} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
