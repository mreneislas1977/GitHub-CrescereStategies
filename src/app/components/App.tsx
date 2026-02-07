import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ChevronLeft } from 'lucide-react';
import { googleService, mockService } from './services/calendarService';
import DateSelector from './components/DateSelector';
import TimeSlotList from './components/TimeSlotList';
import BookingForm from './components/BookingForm';
import SuccessScreen from './components/SuccessScreen';
import { BookingResult } from './types';
import { CONFIG } from './constants';

// Use mock service if no API key is set to prevent "vibe" crashes during dev
const calendar = CONFIG.API_KEY === "YOUR_ACTUAL_GOOGLE_API_KEY" ? mockService : googleService;

export default function App() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [slots, setSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingResult, setBookingResult] = useState<BookingResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Initialize Google API on Load
  useEffect(() => {
    calendar.initClient().catch(err => {
      console.error("GAPI Init Error:", err);
      setError("Failed to connect to Google Calendar.");
    });
  }, []);

  // Fetch slots when date changes
  useEffect(() => {
    if (selectedDate) {
      setLoadingSlots(true);
      calendar.getAvailableSlots(selectedDate)
        .then(setSlots)
        .catch(() => setError("Could not fetch available times."))
        .finally(() => setLoadingSlots(false));
    }
  }, [selectedDate]);

  const handleBooking = async (formData: any) => {
    setIsSubmitting(true);
    setError(null);
    try {
      // FIX 1: Use .bookAppointment to match calendarService.ts
      // FIX 2: Use .toLocaleDateString('en-CA') for stable YYYY-MM-DD formatting
      const result = await calendar.bookAppointment({
        ...formData,
        date: selectedDate?.toLocaleDateString('en-CA'), 
        time: selectedTime,
        serviceType: "Strategy Session"
      });
      setBookingResult(result);
      setStep(4);
    } catch (err) {
      console.error("Booking Error:", err);
      setError("Booking failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-white font-body text-brand-brown p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Header */}
        <div className={`${CONFIG.THEME.primary} p-8 text-white text-center`}>
          <h1 className="text-4xl font-heading font-bold mb-2">{CONFIG.COMPANY_NAME}</h1>
          <p className="text-emerald-100 italic">Schedule Your Strategy Session</p>
        </div>

        <div className="p-6 md:p-10">
          {step < 4 && (
            <div className="flex items-center gap-4 mb-8 text-sm font-bold uppercase tracking-widest text-emerald-800">
              <div className={`flex items-center gap-2 ${step >= 1 ? 'opacity-100' : 'opacity-30'}`}>
                <span className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">1</span> Date
              </div>
              <div className="h-px w-8 bg-gray-200" />
              <div className={`flex items-center gap-2 ${step >= 2 ? 'opacity-100' : 'opacity-30'}`}>
                <span className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">2</span> Time
              </div>
              <div className="h-px w-8 bg-gray-200" />
              <div className={`flex items-center gap-2 ${step >= 3 ? 'opacity-100' : 'opacity-30'}`}>
                <span className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">3</span> Details
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
                <Calendar className="text-emerald-600" /> Select a Date
              </h2>
              <DateSelector 
                selectedDate={selectedDate} 
                onSelectDate={(d) => { setSelectedDate(d); setStep(2); }} 
              />
            </div>
          )}

          {step === 2 && (
            <div className="animate-fadeIn">
              <button onClick={() => setStep(1)} className="flex items-center text-sm mb-4 hover:text-emerald-700">
                <ChevronLeft size={16} /> Back to Calendar
              </button>
              <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
                <Clock className="text-emerald-600" /> Select a Time
              </h2>
              <TimeSlotList 
                slots={slots} 
                loading={loadingSlots} 
                selectedTime={selectedTime}
                onSelectTime={(t) => { setSelectedTime(t); setStep(3); }}
                error={error}
              />
            </div>
          )}

          {step === 3 && selectedDate && selectedTime && (
            <BookingForm 
              date={selectedDate}
              time={selectedTime}
              serviceType="Strategy Session"
              isSubmitting={isSubmitting}
              onBack={() => setStep(2)}
              onSubmit={handleBooking}
              error={error}
            />
          )}

          {step === 4 && (
            <SuccessScreen data={bookingResult} onReset={() => window.location.reload()} />
          )}
        </div>
      </div>
    </div>
  );
}
