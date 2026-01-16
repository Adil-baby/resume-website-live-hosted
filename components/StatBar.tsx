
import React from 'react';

interface StatBarProps {
  label: string;
  value: number;
  max: number;
  unit: string;
}

export const StatBar: React.FC<StatBarProps> = ({ label, value, max, unit }) => {
  const percentage = (value / max) * 100;
  
  return (
    <div className="mb-6">
      <div className="flex justify-between text-2xl mb-1">
        <span>{label}</span>
        <span>{value}/{max} {unit}</span>
      </div>
      <div className="h-6 bg-black border-4 border-white relative overflow-hidden">
        <div 
          className="h-full bg-white transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
        {/* Animated glint effect */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
      </div>
    </div>
  );
};
