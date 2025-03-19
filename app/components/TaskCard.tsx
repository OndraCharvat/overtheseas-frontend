"use client";

import React, { useState } from "react";
import { Info } from "lucide-react";

interface TaskCardProps {
  title: string;
  subtitle?: string;
  description?: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, subtitle, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-purpleots text-white rounded-2xl p-6 w-full md:w-64 lg:w-72 cursor-pointer transition-all duration-300"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          {subtitle && <p className="text-sm">{subtitle}</p>}
        </div>
        <Info size={20} className="text-white opacity-90" />
      </div>

      {/* Rozkliknutý popis */}
      {isOpen && description && (
        <p className="mt-3 text-sm text-white p-3 rounded-lg shadow-lg">
          {description}
        </p>
      )}
    </div>
  );
};

export default TaskCard;