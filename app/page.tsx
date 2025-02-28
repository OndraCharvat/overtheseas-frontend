import TaskSection from "./components/TaskSection";
import WelcomeMessage from "./components/WelcomeMessage";
import ProcessMap from "./components/ProcessMap";
import { Sidebar } from "lucide-react";
import CountdownTimer from "./components/CountdownTimer";
import ProgressBar from "./components/ProgressBar";

export default function Home() {
  return (
    <main className="p-6">
      <WelcomeMessage />
      <TaskSection />
      <ProcessMap />
      <CountdownTimer targetDate="2025-09-01T00:00:00" />
      <ProgressBar progress={50} />
      <Sidebar size={32} />
      {/* Další obsah stránky */}
    </main>
  );
}
