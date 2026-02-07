import React from 'react';
import { CONFIG, US_HOLIDAYS } from '../constants';

interface DateSelectorProps {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ selectedDate, onSelectDate }) => {
  const dates: Date[] = [];
  const today = new Date();

  // Start checking from today
  const current = new Date(today);

  // Calculate end date (2 months from now)
  const endDate = new Date(today);
  endDate.setMonth(today.getMonth() + 2);

  // Generate valid business days up to 2 months in advance
  while (current <= endDate) {
    const dayOfWeek = current.getDay(); // 0 = Sun, 6 = Sat

    // Format current candidate date to YYYY-MM-DD for comparison with holiday list
    const year = current.getFullYear();
    const month = String(current.getMonth() + 1).padStart(2, '0');
    const day = String(current.getDate()).padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;

    // Filter Logic:
    // 1. Must not be Sunday (0) or Saturday (6)
    // 2. Must not be in the US_HOLIDAYS list
    // FIX: Added '===' comparison operator to correctly check for Saturday (6)
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; 
    const isHoliday = US_HOLIDAYS.includes(dateString);

    if (!isWeekend && !isHoliday) {
      dates.push(new Date(current));
    }

    // Move to next day
    current.setDate(current.getDate() + 1);
  }

  return (
    <div className="mb-8">
      <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
        {dates.map((date) => {
          const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
          const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
          const dayNum = date.getDate();
          const month = date.toLocaleDateString('en-US', { month: 'short' });

          return (
            <button
              key={date.toISOString()}
              onClick={() => onSelectDate(date)}
              className={`
                flex flex-col items-center justify-center min-w-[80px] h-28
                rounded-xl border transition-all duration-200 flex-shrink-0
                ${isSelected
                  ? `${CONFIG.THEME.primary} text-white shadow-lg scale-105 border-transparent`
                  : 'bg-white border-gray-200 text-gray-600 hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700'
                }
              `}
            >
              <span className="text-xs font-semibold uppercase opacity-80">
                {month}</span>
              <span className="text-2xl font-bold my-1">{dayNum}</span>
              <span className="text-sm font-medium opacity-80">{dayName}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DateSelector;
