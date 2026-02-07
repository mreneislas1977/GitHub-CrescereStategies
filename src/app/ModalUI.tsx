'use client';
import React, { useState } from 'react';
import { useModal } from "./ModalContext";
import { FaTimes, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import { db } from './firebase'; // Ensure this path is correct based on your flat structure
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function ModalUI() {
  const { isModalOpen, closeModal } = useModal();
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  if (!isModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName'),
      organization: formData.get('organization'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      timestamp: serverTimestamp(),
      source: 'Leadership Lab Briefing Request'
    };

    try {
      await addDoc(collection(db, "briefingRequests"), data);
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        closeModal();
      }, 3000);
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-white w-full max-w-lg rounded-sm shadow-2xl relative p-8 md:p-12 border-t-4 border-crescere-gold">
        
        <button 
          onClick={closeModal} 
          className="absolute top-4 right-4 text-gray-400 hover:text-crescere-green transition-colors"
        >
          <FaTimes size={24} />
        </button>

        {status === 'success' ? (
          <div className="text-center py-8 animate-in fade-in zoom-in duration-300">
            <FaCheckCircle className="text-crescere-gold text-6xl mx-auto mb-6" />
            <h2 className="text-3xl font-display font-bold text-crescere-green mb-2">Request Received</h2>
            <p className="text-gray-600">Our executive team will reach out to you shortly.</p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-display font-bold text-crescere-green mb-2">Request A Briefing</h2>
            <p className="text-gray-500 mb-8 text-sm uppercase tracking-widest font-bold">Confidential Executive Access</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  required
                  name="fullName"
                  type="text" 
                  placeholder="Full Name *" 
                  className="w-full p-4 border border-gray-200 focus:border-crescere-gold outline-none transition-colors" 
                />
              </div>
              <div>
                <input 
                  required
                  name="organization"
                  type="text" 
                  placeholder="Organization Name *" 
                  className="w-full p-4 border border-gray-200 focus:border-crescere-gold outline-none transition-colors" 
                />
              </div>
              <div>
                <input 
                  required
                  name="email"
                  type="email" 
                  placeholder="Professional E-Mail *" 
                  className="w-full p-4 border border-gray-200 focus:border-crescere-gold outline-none transition-colors" 
                />
              </div>
              <div>
                <input 
                  required
                  name="phone"
                  type="tel" 
                  placeholder="Phone Number *" 
                  className="w-full p-4 border border-gray-200 focus:border-crescere-gold outline-none transition-colors" 
                />
              </div>
              
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-5 bg-crescere-green text-white font-bold uppercase tracking-widest hover:bg-crescere-gold transition-all flex items-center justify-center gap-3 disabled:bg-gray-400"
              >
                {status === 'loading' ? <FaSpinner className="animate-spin" /> : 'Submit Request'}
              </button>
              
              {status === 'error' && (
                <p className="text-red-600 text-sm text-center">An error occurred. Please try again or contact support.</p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
