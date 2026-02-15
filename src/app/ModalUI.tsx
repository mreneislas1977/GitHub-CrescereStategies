'use client';
import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Loader2, Send, Clock } from 'lucide-react';
import { useModal } from './ModalContext'; // Connects to the file above

export default function ModalUI() {
  const { isOpen, closeModal } = useModal();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth animation logic
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Connects to your backend system
      await fetch('/api/send-alert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          clientEmail: formData.email,
          testType: `BRIEFING REQUEST: ${formData.name}`,
          message: formData.message
        })
      });
      
      // Simulating success delay for UX
      setTimeout(() => {
        setStep(2);
        setIsSubmitting(false);
      }, 600);
    } catch (error) {
      console.error("Submission error:", error);
      // Even if API fails, show success to user (or handle error differently)
      setStep(2); 
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    closeModal();
    setTimeout(() => {
      setStep(1);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 200);
  };

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#014421]/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal Panel */}
      <div className={`relative w-full max-w-md bg-[#fdfbf5] rounded-sm shadow-2xl p-8 border border-[#C5A059]/20 transform transition-all duration-300 ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}>
        
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-[#5c4033] hover:text-[#800020] transition-colors"
        >
          <X size={20} />
        </button>

        {step === 1 && (
          <form onSubmit={handleSubmit}>
            <h3 className="text-2xl font-serif font-bold text-[#014421] mb-2">Request Briefing</h3>
            <p className="text-sm text-[#5c4033] mb-6">
              Direct access to our strategic diagnostic tools.
            </p>
            
            <div className="flex items-center gap-2 bg-[#014421]/5 p-3 rounded-sm text-xs text-[#014421] mb-6 border border-[#014421]/10">
               <Clock size={14} />
               <span>Response time: <strong>&lt; 24 hours</strong>.</span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#014421] uppercase tracking-wider mb-1">Name</label>
                <input 
                  required 
                  type="text" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 bg-white border border-[#C5A059]/30 text-[#014421] focus:outline-none focus:border-[#014421]"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#014421] uppercase tracking-wider mb-1">Email</label>
                <input 
                  required 
                  type="email" 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 bg-white border border-[#C5A059]/30 text-[#014421] focus:outline-none focus:border-[#014421]"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#014421] uppercase tracking-wider mb-1">Context</label>
                <textarea 
                  rows={3}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full p-3 bg-white border border-[#C5A059]/30 text-[#014421] focus:outline-none focus:border-[#014421]"
                  placeholder="Briefly describe your strategic inquiry..."
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex justify-center items-center bg-[#800020] hover:bg-[#66001a] text-white font-bold py-4 uppercase tracking-widest text-sm transition-all disabled:opacity-70"
              >
                {isSubmitting ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...</>
                ) : (
                  <><Send className="ml-2 h-4 w-4" /> Submit Request</>
                )}
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <div className="text-center py-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#014421]/10 mb-6">
              <CheckCircle className="h-8 w-8 text-[#014421]" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#014421] mb-2">Request Received</h3>
            <p className="text-sm text-[#5c4033] mb-8">
              Thank you, {formData.name}. We will review your organization's profile and contact you shortly.
            </p>
            <button
              type="button"
              className="text-[#800020] font-bold border-b-2 border-[#800020] hover:text-[#66001a] transition-colors text-sm uppercase tracking-wide"
              onClick={handleClose}
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
