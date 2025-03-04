"use client"
import { useState } from 'react';
import CountdownTimer from './CountdownTimer';
import ProgressBar from './ProgressBar';
import Link from 'next/link';

// Import icons
import { FileText, User, GitBranch, ChevronDown } from 'lucide-react';

export default function Dashboard() {
  // Example date for the countdown timer
  const targetDate = "2025-04-15T00:00:00";
  
  // Example progress value
  
  const progress = 95;

  return (
    <div className="w-full max-w-xs space-y-5">

       {/* Countdown Timer */}
       <CountdownTimer targetDate={targetDate} />

      <div className=" bg-brightpurple rounded-2xl p-10 flex flex-col text-center space-y-4">
        {/* Progress section */}
        <div className=" rounded-lg p-4">
          <h3 className="text-lg font-bold tracking-[-0.02em]">Aktuální stav procesu</h3>
          <ProgressBar progress={progress} />
        </div>
        
        {/* Navigation buttons */}
        <Link href="/documents" className="flex items-center p-6 bg-white rounded-2xl shadow-sm hover:bg-gray-50 transition-colors">
          <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mr-3">
            <FileText className="w-5 h-5 text-purpleots" />
          </div>
          <div className="flex-1">
            <span className="font-medium tracking-[-0.05em]">Dokumenty</span>
          </div>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </Link>
        
        <Link href="/profile" className="flex items-center p-6 bg-white rounded-2xl shadow-sm hover:bg-gray-50 transition-colors">
          <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mr-3">
            <User className="w-5 h-5 text-purpleots" />
          </div>
          <div className="flex-1">
            <span className="font-medium tracking-[-0.05em]">Profil studenta</span>
          </div>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </Link>
        
        <Link href="/section" className="flex items-center p-6 bg-white rounded-2xl shadow-sm hover:bg-gray-50 transition-colors">
          <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mr-3">
            <GitBranch className="w-5 h-5 text-purpleots" />
          </div>
          <div className="flex-1">
            <span className="font-medium tracking-[-0.05em]">Fázový proces</span>
          </div>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </Link>
      </div>
    </div>
  );
}