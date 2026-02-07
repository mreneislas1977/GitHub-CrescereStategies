import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Loader2, Mail, User, Video, AlertCircle } from 'lucide-react';
import { CONFIG } from '../constants';
import { BookingDetails } from '../types';

interface BookingFormProps {
  date: Date;
  time: string;
  serviceType: string;
  onSubmit: (data: Partial<BookingDetails>) => void;
  onBack: () => void;
  isSubmitting: boolean;
  error?: string | null;
}

const BookingForm: React.FC<BookingFormProps> = ({ date, time, serviceType, onSubmit, onBack, isSubmitting, error }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const formattedDate = date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <div className="animate-slideUp max-w-lg mx-auto">
      <button
        onClick={onBack}
        className="flex items-center text-gray-500 hover:text-emerald-700 mb-6 transition-colors group font-medium text-sm"
      >
        <div className="p-1 rounded-full bg-gray-100 group-hover:bg-emerald-100 mr-2 transition-colors">
          <ArrowLeft className="w-4 h-4" />
        </div>
        Back to times
      </button>

      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
        <div className={`absolute top-0 left-0 w-full h-1 ${CONFIG.THEME.primary}`}></div>

        <div className="flex items-start gap-5 mb-8 pb-8 border-b border-gray-100">
          <div className={`${CONFIG.THEME.secondary} p-4 rounded-2xl shadow-inner`}>
            <Calendar className={`w-8 h-8 ${CONFIG.THEME.accent}`} />
          </div>

          <div>
            <h3 className="text-gray-900 font-bold text-xl leading-tight">
              {serviceType}</h3>
            <div className="mt-3 space-y-1">
              <p className={`${CONFIG.THEME.accent} font-medium flex items-center text-sm`}>
                <Clock className="w-4 h-4 mr-2" />
                {formattedDate} at {time}
              </p>
              <p className="text-gray-500 text-sm flex items-center">
                <Video className="w-4 h-4 mr-2" />
                Google Meet (45 min)
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <div className="relative group">
              <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 group-focus-within:text-emerald-600 transition-colors" />
              <input
                id="name"
                required
                type="text"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 group-focus-within:text-emerald-600 transition-colors" />
              <input
                id="email"
                required
                type="email"
                // FIX: Added pattern for basic client-side email format validation
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                title="Please enter a valid email address (e.g., user@domain.com)"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                placeholder="john@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">Notes <span className="text-gray-400 font-normal">(Optional)</span></label>
            <textarea
              id="notes"
              className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all h-28 resize-none"
              placeholder="Topic of discussion..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            />
          </div>

          {error && (
            <div className="bg-red-50 text-red-700 p-4 rounded-xl border border-red-100 flex items-start gap-3 animate-fadeIn">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
              <p className="text-sm font-medium">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              w-full py-4 px-6 rounded-xl text-white font-bold shadow-lg shadow-emerald-200
              ${CONFIG.THEME.primary} ${CONFIG.THEME.primaryHover}
              disabled:opacity-70 disabled:cursor-not-allowed
              flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 mt-2
            `}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing...
              </>
            ) : (
              'Confirm Booking'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
