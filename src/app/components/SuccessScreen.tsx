import React from 'react';
import { CheckCircle, Video, Calendar, ArrowRight, ExternalLink, Calendar as CalendarIcon } from 'lucide-react';
import { CONFIG } from '../constants';
import { BookingResult } from '../types';

interface SuccessScreenProps {
  data: BookingResult | null;
  onReset: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ data, onReset }) => {
  return (
    <div className="animate-scaleIn flex flex-col items-center justify-center text-center py-12 px-4 max-w-lg mx-auto">
      {/* Icon and Title */}
      <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-8 shadow-inner">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
            <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
      </div>
      
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
      <p className="text-gray-600 leading-relaxed mb-10">
        Your appointment with <span className="font-semibold text-gray-800">{CONFIG.COMPANY_NAME}</span> is set. 
        A calendar invitation including the Google Meet link has been sent to your email.
      </p>

      {/* Details Card */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xl w-full mb-8 text-left">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 border-b pb-2">Appointment Details</h3>
        
        <div className="space-y-4">
            <div className="flex items-start gap-4">
                <div className="bg-emerald-50 p-2.5 rounded-xl">
                    <Video className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                    <p className="text-sm text-gray-500 font-medium">Location</p>
                    <a href={data?.meetLink} target="_blank" rel="noreferrer" className="text-emerald-700 font-bold hover:underline break-all">
                        Google Meet
                    </a>
                </div>
            </div>
            
             {data?.link && (
                <div className="flex items-start gap-4">
                    <div className="bg-emerald-50 p-2.5 rounded-xl">
                        <Calendar className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div>
                         <p className="text-sm text-gray-500 font-medium">Calendar Event</p>
                         <a href={data.link} target="_blank" rel="noreferrer" className="text-emerald-600 font-medium text-sm hover:underline flex items-center">
                            View Confirmation <ExternalLink className="w-3 h-3 ml-1" />
                         </a>
                    </div>
                </div>
             )}
        </div>
      </div>

      {/* Primary Actions */}
      <div className="w-full space-y-3">
        {data?.googleCalendarUrl && (
            <a 
                href={data.googleCalendarUrl}
                target="_blank"
                rel="noreferrer"
                className={`
                  w-full py-3.5 px-6 rounded-xl text-white font-bold shadow-lg shadow-emerald-200
                  ${CONFIG.THEME.primary} ${CONFIG.THEME.primaryHover}
                  flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5
                `}
            >
                <CalendarIcon className="w-5 h-5" />
                Add to Google Calendar
            </a>
        )}

        <button
            onClick={onReset}
            className="w-full py-3.5 px-6 rounded-xl bg-white border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 hover:text-gray-900 transition-colors flex items-center justify-center gap-2"
        >
            Book Another Appointment
        </button>
      </div>
    </div>
  );
};

export default SuccessScreen;