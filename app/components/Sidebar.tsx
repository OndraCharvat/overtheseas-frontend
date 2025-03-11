"use client"
import CountdownTimer from './CountdownTimer';
import ProgressBar from './ProgressBar';
import Link from 'next/link';


import { FileText, GitBranch } from 'lucide-react';
import { useState } from 'react';

export default function Dashboard() {
 
  const targetDate = "2025-03-31T00:00:00";
  
  
  const progress = 95;
  const id = "id";

  return (
    <div className="relative mt-12 w-full space-y-10">

       <CountdownTimer targetDate={targetDate} />

      <div className="bg-brightpurple rounded-2xl p-10 text-center space-y-4">
        <div className="rounded-lg p-4">
          <h3 className="text-lg font-bold tracking-[-0.02em]">Aktuální stav procesu</h3>
          <ProgressBar progress={progress} />
        </div>
        
        <Link href={`/section/${id}`} className="flex items-center p-6 bg-white rounded-2xl shadow-sm hover:bg-secondary transition-colors">
          <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mr-3">
            <GitBranch className="w-5 h-5 text-purpleots" />
          </div>
          <div className="flex-1">
            <span className="font-medium tracking-[-0.05em]">Fázový proces</span>
          </div>
        </Link>
        
        <Link href="/documents" className="flex items-center p-6 bg-white rounded-2xl shadow-sm hover:bg-secondary transition-colors">
          <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mr-3">
            <FileText className="w-5 h-5 text-purpleots" />
          </div>
          <div className="flex-1">
            <span className="font-medium tracking-[-0.05em]">Dokumenty</span>
          </div>
        </Link>
      </div>
    </div>
  );
}