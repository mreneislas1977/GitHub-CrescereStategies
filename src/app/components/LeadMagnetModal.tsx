import React, { useState } from 'react';
import { FaTimes, FaEnvelope, FaUser, FaBuilding, FaCheck } from 'react-icons/fa';

// --- KEY FIX: Define the expected props ---
interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
  resourceId: string;
}

const LeadMagnetModal: React.FC<LeadMagnetModalProps> = ({ isOpen, onClose, resourceId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call 
    setTimeout(() => {
        setIsSuccess(true);
        setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
        >
          <FaTimes size={20} />
        </button>

        {!isSuccess ? (
          <>
            <h3 className="text-2xl font-display font-bold text-crescere-green mb-2">
              Unlock Your Resource
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              Please enter your details to access this exclusive tool.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Full Name</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-3 text-gray-400" />
                  <input 
                    type="text" 
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-crescere-gold focus:outline-none"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Email Address</label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                  <input 
                    type="email" 
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-crescere-gold focus:outline-none"
                    placeholder="jane@example.org"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-3 bg-crescere-green text-white font-bold rounded-lg hover:bg-opacity-90 transition disabled:opacity-50"
              >
                {isSubmitting ? 'Unlocking...' : 'Get Access Now'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCheck size={24} />
            </div>
            <h3 className="text-2xl font-bold text-crescere-green mb-2">Success!</h3>
            <p className="text-gray-600 mb-6">
              Your resource has been unlocked.
            </p>
            <button 
              onClick={onClose}
              className="px-6 py-2 bg-gray-100 text-gray-700 font-bold rounded-lg hover:bg-gray-200"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadMagnetModal;
