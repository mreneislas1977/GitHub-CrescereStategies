"use client";
import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Loader2, Send, Clock } from 'lucide-react';
import { useModal } from './ModalContext';

export default function ModalUI() {
  const { isOpen, closeModal } = useModal();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Handle animation states manually since we removed Headless UI
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
      fetch('/api/send-alert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          clientEmail: formData.email,
          testType: `BRIEFING REQUEST: ${formData.name}`,
          message: formData.message
        })
      });
      
      setTimeout(() => {
        setStep(2);
        setIsSubmitting(false);
      }, 600);
    } catch (error) {
      console.error("Submission error:", error);
      setStep(2); 
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
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal Panel */}
      <div className={`relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-[#014421]/10 transform transition-all duration-300 ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}>
        
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>

        {step === 1 && (
          <form onSubmit={handleSubmit}>
            <h3 className="text-2xl font-bold text-[#014421] mb-2">Request a Briefing</h3>
            <p className="text-sm text-gray-500 mb-6">
              Connect with our strategy team.
            </p>
            
            <div className="flex items-center gap-2 bg-[#014421]/5 p-3 rounded-lg text-sm text-[#014421] mb-6">
               <Clock size={16} />
               <span>We typically respond within <strong>24 hours</strong>.</span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#014421] mb-1">Name</label>
                <input 
                  required 
                  type="text" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#014421]"
                  placeholder="Executive Name"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#014421] mb-1">Email</label>
                <input 
                  required 
                  type="email" 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#014421]"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#014421] mb-1">Inquiry</label>
                <textarea 
                  rows={3}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#014421]"
                  placeholder="Briefly describe your strategic needs..."
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex justify-center items-center rounded-lg bg-[#014421] px-4 py-4 text-sm font-bold text-white hover:bg-[#014421]/90 transition-all disabled:opacity-70"
              >
                {isSubmitting ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending Request...</>
                ) : (
                  <><Send className="ml-2 h-4 w-4" /> Send Request</>
                )}
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <div className="text-center py-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
              <CheckCircle className="h-8 w-8 text-green-700" />
            </div>
            <h3 className="text-xl font-bold text-[#014421] mb-2">Request Received</h3>
            <p className="text-sm text-gray-500 mb-8">
              Thank you, {formData.name}. Our team has been alerted and will review your file shortly.
            </p>
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-8 py-3 text-sm font-medium text-[#014421] hover:bg-gray-200 transition-colors"
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
