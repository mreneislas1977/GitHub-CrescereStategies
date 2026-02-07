import React, { useState } from 'react';
import { Lock, ArrowRight, Loader, ShieldCheck, User, Building, Mail, Phone } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from '../firebaseConfig'; // Uses your new secure config

interface LeadGateProps {
  onUnlock: () => void;
  appName: string;
}

const LeadGate: React.FC<LeadGateProps> = ({ onUnlock, appName }) => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    org: '', 
    phone: '', 
    role: 'Executive' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. SAVE TO FIREBASE
      await addDoc(collection(db, 'leads'), {
        ...formData,
        tool_accessed: appName,
        timestamp: serverTimestamp(),
      });
      
      // 2. UNLOCK APP
      onUnlock();
    } catch (err) {
      console.error("Error saving lead:", err);
      // Fallback: Unlock anyway if there's a glitch, so user isn't stuck
      onUnlock(); 
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col items-center justify-center p-4 animate-in fade-in duration-700">
      
      {/* Branding Header */}
      <div className="mb-8 text-center">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-brand-green mb-2">Crescere Strategies</h1>
        <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full"></div>
      </div>

      <div className="max-w-xl w-full bg-white p-8 rounded-sm shadow-xl border-t-4 border-brand-green relative overflow-hidden">
        
        {/* Header Section */}
        <div className="text-center mb-8 relative z-10">
          <div className="bg-brand-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-8 h-8 text-brand-green" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-brand-brown">Unlock {appName}</h2>
          <p className="text-sm text-brand-brown/60 mt-2 leading-relaxed">
            Please provide your details to generate your preliminary health assessment.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-brown/50 ml-1">Full Name</label>
                <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-brand-brown/30" />
                    <input 
                    type="text" 
                    required 
                    className="w-full pl-10 p-3 bg-brand-cream/30 border border-brand-brown/20 rounded-sm focus:border-brand-green outline-none transition-all"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                </div>
            </div>

            <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-brown/50 ml-1">Organization</label>
                <div className="relative">
                    <Building className="absolute left-3 top-3 w-4 h-4 text-brand-brown/30" />
                    <input 
                    type="text" 
                    required 
                    className="w-full pl-10 p-3 bg-brand-cream/30 border border-brand-brown/20 rounded-sm focus:border-brand-green outline-none transition-all"
                    placeholder="Non-Profit Name"
                    value={formData.org}
                    onChange={e => setFormData({...formData, org: e.target.value})}
                    />
                </div>
            </div>
          </div>
          
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-widest text-brand-brown/50 ml-1">Work Email</label>
            <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-brand-brown/30" />
                <input 
                type="email" 
                required 
                className="w-full pl-10 p-3 bg-brand-cream/30 border border-brand-brown/20 rounded-sm focus:border-brand-green outline-none transition-all"
                placeholder="jane@company.org"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-widest text-brand-brown/50 ml-1">Phone (Optional)</label>
            <div className="relative">
                <Phone className="absolute left-3 top-3 w-4 h-4 text-brand-brown/30" />
                <input 
                type="tel" 
                className="w-full pl-10 p-3 bg-brand-cream/30 border border-brand-brown/20 rounded-sm focus:border-brand-green outline-none transition-all"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
                />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full py-4 bg-brand-green hover:bg-brand-brown text-white font-bold uppercase tracking-widest text-sm rounded-sm transition-all shadow-lg hover:shadow-xl flex items-center justify-center mt-6"
          >
            {isSubmitting ? (
              <><Loader className="w-5 h-5 animate-spin mr-2" /> Processing...</>
            ) : (
              <>Access Tool <ArrowRight className="w-4 h-4 ml-2" /></>
            )}
          </button>
        </form>
        
        <p className="text-[10px] text-center text-brand-brown/40 mt-6 flex justify-center items-center gap-1">
           <Lock className="w-3 h-3" /> Your data is secure and will not be shared.
        </p>
      </div>
    </div>
  );
};

export default LeadGate;