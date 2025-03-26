import TaskSection from "./components/TaskSection";
import WelcomeMessage from "./components/WelcomeMessage";
import ProcessMap from "./components/ProcessMap";
import Sidebar  from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";


export default function Home() {
  return (
    <ProtectedRoute>
    <main className="flex flex-col md:flex-row">
      <div className="p-12 flex-1">
      <WelcomeMessage />
      <TaskSection />
      <ProcessMap />
      </div>

      <div className="p-12">
      <Sidebar />
      </div>
    </main>
    </ProtectedRoute>
  );
}
