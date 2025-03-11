"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
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
  const [index, setIndex] = useState(0);

  const nextPhase = () => setIndex((prev) => (prev + 1) % phases.length);
  const prevPhase = () => setIndex((prev) => (prev - 1 + phases.length) % phases.length);

  const handlers = useSwipeable({
    onSwipedLeft: nextPhase,
    onSwipedRight: prevPhase,
    trackMouse: true,
  });

  return (
    <div {...handlers} className="relative mt-8 rounded-2xl w-full max-w-4xl p-10 text-center bg-brightpurple">
      <h2 className="text-2xl font-bold mb-4">Mapa procesu</h2>
      <div className="flex items-center p-8 justify-center gap-10">
        <button onClick={prevPhase} className="hidden sm:flex p-2 rounded-full bg-gray-200 hover:bg-secondary transition">
          <ChevronLeft size={32} />
        </button>
        <Link href={`/section/${phases[index].id}`} className="relative w-80 h-60 md:w-80 md:h-60 sm:w-80 sm:h-60 xs:w-40 xs:h-30 flex rounded-2xl bg-secondary justify-center items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <PhaseCard key={phases[index].id} title={phases[index].title} detail={phases[index].detail} />
          </AnimatePresence>
        </Link>
        <button onClick={nextPhase} className="hidden sm:flex p-2 rounded-full bg-gray-200 hover:bg-secondary transition">
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );  
};

export default ProcessMap;
