import { motion } from "framer-motion";

interface PhaseCardProps {
  title: string;
  detail: string;
}

const PhaseCard: React.FC<PhaseCardProps> = ({ title, detail }) => {
  return (
<motion.div
      initial={{ opacity: 0, x: 900 }}  // Pouze pozice vlevo, bez změny velikosti
      animate={{ opacity: 1, x: 0 }}     // Přesun na střed, bez změny velikosti
      exit={{ opacity: 0, x: -200 }}      // Přesun doprava, bez změny velikosti
      transition={{ 
        duration: 0.2,             // Přiměřená doba trvání
        ease: "easeInOut",         // Plynulá křivka zrychlení a zpomalení
        type: "tween"              // Lineární typ animace místo spring pro stabilnější pohyb
      }}
      className="w-80 h-60 bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-center items-center"
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-600">{detail}</p>
    </motion.div>
  );
};

export default PhaseCard;
