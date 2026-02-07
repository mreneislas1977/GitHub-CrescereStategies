import React from 'react';
import { Loader2, AlertCircle } from 'lucide-react';
import { CONFIG } from '../constants';

interface TimeSlotListProps {
  slots: string[];
  loading: boolean;
  onSelectTime: (time: string) => void;
  selectedTime: string | null;
  error?: string | null;
}

const TimeSlotList: React.FC<TimeSlotListProps> = ({ slots, loading, onSelectTime, selectedTime, error }) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-400">
        <Loader2 className="w-8 h-8 animate-spin mb-3 text-emerald-600" />
        <p className="font-medium">Checking availability...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-6 text-red-600 bg-red-50 rounded-xl border border-red-100 text-center">
        <AlertCircle className="w-8 h-8 mb-2" />
        <p className="font-bold mb-1">Unable to load slots</p>
        <p className="text-sm opacity-90 max-w-xs">{error}</p>
      </div>
    );
  }

  if (slots.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-6 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300">
        <p className="font-medium">No slots available for this date.</p>
        <p className="text-sm mt-1">Please try selecting another day.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 animate-fadeIn">
      {slots.map((time) => {
          const isSelected = selectedTime === time;
          return (
            <button
            key={time}
            onClick={() => onSelectTime(time)}
            className={`
                py-3 px-4 rounded-lg border font-medium transition-all text-sm
                ${isSelected 
                    ? `${CONFIG.THEME.primary} text-white border-transparent shadow-md ring-2 ring-emerald-200 ring-offset-1`
                    : `bg-white border-emerald-100 text-emerald-800 hover:bg-emerald-800 hover:text-white hover:shadow-md active:scale-95`
                }
            `}
            >
            {time}
            </button>
        );
      })}
    </div>
  );
};

export default TimeSlotList;