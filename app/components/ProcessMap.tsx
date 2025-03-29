"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import PhaseCard from "./PhaseCard";

interface ProcessMapProps {
  phases?: {
    id: string;
    title: string;
    description: string;
  }[];
  phaseId?: string;
}

const ProcessMap = ({ phases, phaseId }: ProcessMapProps) => {
  const [index, setIndex] = useState(0);
  phases = phases?.length ? phases : [];
  phaseId = !phaseId ? "" : phaseId;

  const nextPhase = () => {
    if (phases.length > 0) {
      setIndex((prev) => (prev + 1) % phases.length);
    }
  };

  const prevPhase = () => {
    if (phases.length > 0) {
      setIndex((prev) => (prev - 1 + phases.length) % phases.length);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextPhase,
    onSwipedRight: prevPhase,
    trackMouse: true,
  });

  if (phases.length === 0) {
    return <p className="text-center text-gray-500">No phases available.</p>;
  }

  return (
    <div
      {...handlers}
      className="relative mt-8 rounded-2xl w-full max-w-4xl p-10 bg-brightpurple shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-4">Mapa procesu</h2>
      <div className="flex items-center p-8 justify-center gap-10">
        <button
          onClick={prevPhase}
          className="hidden sm:flex p-2 rounded-full bg-gray-200 hover:bg-secondary transition"
        >
          <ChevronLeft size={32} />
        </button>
        <Link
          href={`/phase/${phases[index]?.id}`}
          className={`relative w-80 h-60 md:w-80 md:h-60 sm:w-80 sm:h-60 xs:w-40 xs:h-30 flex rounded-2xl bg-secondary justify-center items-center overflow-hidden ${
            !(phases[index].id === phaseId) && "pointer-events-none"
          }`}
        >
          <AnimatePresence mode="wait">
            <PhaseCard
              key={phases[index]?.id}
              title={phases[index]?.title || "No title"}
              current={phases[index].id === phaseId}
              detail={phases[index].description}
            />
          </AnimatePresence>
        </Link>
        <button
          onClick={nextPhase}
          className="hidden sm:flex p-2 rounded-full bg-gray-200 hover:bg-secondary transition"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default ProcessMap;
