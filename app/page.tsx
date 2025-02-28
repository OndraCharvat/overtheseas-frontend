import TaskSection from "./components/TaskSection";
import WelcomeMessage from "./components/WelcomeMessage";
import ProcessMap from "./components/ProcessMap";
import { Sidebar } from "lucide-react";
import CountdownTimer from "./components/CountdownTimer";
import ProgressBar from "./components/ProgressBar";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row">
      <div className="p-12 flex-1">
      <WelcomeMessage />
      <TaskSection />
      <ProcessMap />
      </div>

      <div className="flex flex-col mr-12 mt-2 gap-4 md:w-1/4">
      <CountdownTimer targetDate="2025-09-01T00:00:00" />
      <ProgressBar progress={50} />
      <Sidebar size={32} />
      {/* Další obsah stránky */}
      </div>
    </main>
  );
}
