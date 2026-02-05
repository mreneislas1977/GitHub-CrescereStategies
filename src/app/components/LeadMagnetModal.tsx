'use client';
import React, { useState } from 'react';

interface Props {
  tool: { id: string, title: string };
  onClose: () => void;
}

const LeadMagnetModal: React.FC<Props> = ({ tool, onClose }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const payload = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      organization: formData.get('organization'),
      toolId: tool.id,
      toolName: tool.title,
      timestamp: new Date().toISOString(),
    };

    const res = await fetch('/api/leads', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      alert("Access Granted. Your tool is ready!");
      // Here you would redirect to the actual tool or download the PDF
      onClose();
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-crescere-green/90 z-[100] flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-crescere-brown text-2xl">&times;</button>
        <h2 className="text-2xl font-display font-bold text-crescere-green mb-2">Access {tool.title}</h2>
        <p className="text-sm text-crescere-brown/70 mb-6 font-body">Please provide your details to unlock this executive resource.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input name="firstName" placeholder="First Name" required className="p-3 border rounded w-full border-crescere-brown/20" />
            <input name="lastName" placeholder="Last Name" required className="p-3 border rounded w-full border-crescere-brown/20" />
          </div>
          <input name="organization" placeholder="Organization" required className="p-3 border rounded w-full border-crescere-brown/20" />
          <input name="phone" type="tel" placeholder="Phone Number" required className="p-3 border rounded w-full border-crescere-brown/20" />
          <input name="email" type="email" placeholder="Work Email" required className="p-3 border rounded w-full border-crescere-brown/20" />
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-crescere-gold text-crescere-green font-bold py-4 rounded hover:brightness-110 transition"
          >
            {loading ? 'Processing...' : 'UNLOCK TOOL'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadMagnetModal;
