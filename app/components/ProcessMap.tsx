"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PhaseCard from "./PhaseCard";

const phases = [
  { id: 1, title: "Fáze 1", detail: "Příprava dokumentů" },
  { id: 2, title: "Fáze 2", detail: "Podání přihlášky" },
  { id: 3, title: "Fáze 3", detail: "Přihláška do Kanadské školy" },
  { id: 4, title: "Fáze 4", detail: "Schválení a umístění" },
  { id: 5, title: "Fáze 5", detail: "Víza a letenky" },
  { id: 6, title: "Fáze 6", detail: "Příprava na odjezd" },
  { id: 7, title: "Fáze 7", detail: "Začátek programu" },
];

const ProcessMap = () => {
  const [index, setIndex] = useState(2);

  const nextPhase = () => setIndex((prev) => (prev + 1) % phases.length);
  const prevPhase = () => setIndex((prev) => (prev - 1 + phases.length) % phases.length);

  const handlers = useSwipeable({
    onSwipedLeft: nextPhase,
    onSwipedRight: prevPhase,
    trackMouse: true,
  });

  return (
    <div {...handlers} className="relative mt-8 rounded-2xl w-full max-w-4xl p-8 text-center bg-brightpurple">
      <h2 className="text-2xl font-bold mb-4">Mapa procesu</h2>
      <div className="flex items-center justify-center gap-4">
        <button onClick={prevPhase} className="p-2 rounded-full bg-gray-200 hover:bg-secondary transition">
          <ChevronLeft size={32} />
        </button>
        <div className="relative w-64 h-40 flex justify-center items-center overflow-hidden">
          <AnimatePresence mode="popLayout">
            <PhaseCard key={phases[index].id} title={phases[index].title} detail={phases[index].detail} />
          </AnimatePresence>
        </div>
        <button onClick={nextPhase} className="p-2 rounded-full bg-gray-200 hover:bg-secondary transition">
          <ChevronRight size={32} />
        </button>
      </div>
      <button className="mt-4 px-6 py-2 bg-purpleots text-white rounded-lg hover:bg-secondary transition">
        Přejít na detaily
      </button>
    </div>
  );
};

export default ProcessMap;
