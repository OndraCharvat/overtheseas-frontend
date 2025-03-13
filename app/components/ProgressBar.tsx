"use client"
import React from 'react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  // Calculate the circumference of the circle
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="relative w-48 h-48">
        <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 110 110">
          <circle 
            cx="55" 
            cy="55" 
            r="50" 
            fill="none" 
            stroke="url(#progressGradient)" 
            strokeWidth="8" 
            strokeDasharray={circumference} 
            strokeDashoffset={dashoffset}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#29ffaf" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#a855f7" /> 
            </linearGradient>
          </defs>
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-semibold text-gray-700">{progress.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;