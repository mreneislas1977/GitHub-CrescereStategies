'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FaTimes } from 'react-icons/fa'; 

// 1. Define the Context Shape
interface ModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

// 2. Create Context with default values
const ModalContext = createContext<ModalContextType>({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

// 3. The Provider (Wraps your App)
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
      {/* The Modal renders automatically here when open */}
      {isModalOpen && <DiagnosticModal onClose={closeModal} />}
    </ModalContext.Provider>
  );
};

// 4. Custom Hook for easy access
export const useModal = () => useContext(ModalContext);

// ============================================================================
// THE MODAL COMPONENT (Internal)
// ============================================================================

const DiagnosticModal = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    console.log("Form Submitted:", formData);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  // --- SUCCESS VIEW ---
  if (submitted) {
    return (
      <ModalOverlay onClose={onClose}>
        <div className="text-center py-12 px-8">
          <h3 className="text-3xl font-serif text-[#014421] mb-6 font-bold">Request Received.</h3>
          <p className="text-[#5c4033] mb-8 text-lg leading-relaxed">
            Thank you for requesting a free diagnostic analysis from <strong>Crescere Strategies LLC</strong>.
            <br className="mt-4"/>
            We will review your organization's profile and contact you shortly.
          </p>
          <button 
            onClick={onClose}
            className="text-[#800020] font-bold border-b-2 border-[#800020] hover:text-[#66001a] transition-colors"
          >
            Close Window
          </button>
        </div>
      </ModalOverlay>
    );
  }

  // --- FORM VIEW ---
  return (
    <ModalOverlay onClose={onClose}>
      <div className="px-8 py-10 relative">
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 text-[#5c4033] hover:text-[#800020] transition-colors"
        >
          <FaTimes size={20} />
        </button>

        <h2 className="text-3xl font-serif font-bold text-[#014421] mb-2">
          Initiate Diagnostic
        </h2>
        
        <p className="text-sm text-[#5c4033] mb-8 leading-relaxed">
          Please provide your contact details to begin the evaluation process.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-[#5c4033] mb-2">Full Name</label>
            <input 
              required type="text" name="name"
              value={formData.name} onChange={handleChange}
              className="w-full bg-[#f9f9f9] border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-[#014421] focus:ring-1 focus:ring-[#014421] transition-all text-[#014421]"
            />
          </div>

          {/* Organization */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-[#5c4033] mb-2">Organization</label>
            <input 
              required type="text" name="organization"
              value={formData.organization} onChange={handleChange}
              className="w-full bg-[#f9f9f9] border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-[#014421] focus:ring-1 focus:ring-[#014421] transition-all text-[#014421]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-[#5c4033] mb-2">Phone Number</label>
            <input 
              required type="tel" name="phone"
              value={formData.phone} onChange={handleChange}
              className="w-full bg-[#f9f9f9] border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-[#014421] focus:ring-1 focus:ring-[#014421] transition-all text-[#014421]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-[#5c4033] mb-2">Email Address</label>
            <input 
              required type="email" name="email"
              value={formData.email} onChange={handleChange}
              className="w-full bg-[#f9f9f9] border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-[#014421] focus:ring-1 focus:ring-[#014421] transition-all text-[#014421]"
            />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full mt-4 bg-[#800020] text-white font-bold text-sm tracking-widest uppercase py-4 rounded-sm hover:bg-[#66001a] transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Processing Request...' : 'Request Briefing'}
          </button>
        </form>
      </div>
    </ModalOverlay>
  );
};

// UI Helper: The Dark Background Overlay
const ModalOverlay = ({ children, onClose }: { children: ReactNode, onClose: () => void }) => (
  <div 
    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#014421]/60 backdrop-blur-sm"
    onClick={onClose}
  >
    <div 
      className="bg-[#fdfbf5] w-full max-w-md relative shadow-2xl rounded-sm overflow-hidden animate-in fade-in zoom-in duration-200"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  </div>
);
