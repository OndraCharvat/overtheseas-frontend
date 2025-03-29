"use client";

import React, { useState } from "react";
import { Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TaskCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  completed?: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  subtitle,
  description,
  completed,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <AnimatePresence initial={false} mode="wait">
      {!isFlipped ? (
        <motion.div
          key="front"
          className={`${
            completed ? "bg-emerald-400 pointer-events-none" : "bg-purpleots"
          } text-white rounded-2xl p-8 w-full md:w-64 lg:w-72 cursor-pointer transition-all duration-300`}
          initial={{ rotateY: 180 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: -180 }}
          transition={{ duration: 0.1 }}
          onClick={() => setIsFlipped(true)}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold">{title}</h3>
              {subtitle && <p className="text-sm">{subtitle}</p>}
            </div>
            <Info size={20} className="text-white opacity-90" />
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="back"
          className="bg-white text-purpleots rounded-2xl p-6 w-full md:w-64 lg:w-72 cursor-pointer transition-all duration-300"
          initial={{ rotateY: -180 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: 180 }}
          transition={{ duration: 0.1 }}
          onClick={() => setIsFlipped(false)}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex flex-col h-full justify-center">
            {description && (
              <p className="text-sm leading-relaxed">{description}</p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TaskCard;
