
import React from 'react';

interface PixelBoxProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const PixelBox: React.FC<PixelBoxProps> = ({ children, className = "", title }) => {
  return (
    <div className={`pixel-border-inset p-6 ${className}`}>
      {title && (
        <h3 className="text-3xl mb-6 border-b-4 border-white pb-2 flex justify-between items-center">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};
