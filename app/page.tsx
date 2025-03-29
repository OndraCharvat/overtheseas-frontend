"use client";

import TaskSection from "./components/TaskSection";
import WelcomeMessage from "./components/WelcomeMessage";
import ProcessMap from "./components/ProcessMap";
import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";
import { useQuery } from "@tanstack/react-query";
import { handleGetDashboard } from "./handlers/dashboardHandler";
import { useAuth0 } from "@auth0/auth0-react";
import { data } from "autoprefixer";
import { useState } from "react";

export default function Home() {
  const { getAccessTokenSilently } = useAuth0();

  const dashboardQuery = useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => handleGetDashboard(await getAccessTokenSilently()),
  });

  return (
    <ProtectedRoute>
      <main className="flex flex-col md:flex-row">
        <div className="p-12 flex-1">
          <WelcomeMessage />
          <TaskSection
            tasks={dashboardQuery.data?.currentPhaseTasks}
            completedTasksIds={dashboardQuery.data?.completedTasksIds}
          />
          <ProcessMap
            phases={dashboardQuery.data?.phases}
            phaseId={dashboardQuery.data?.currentPhaseId}
          />
        </div>

        <div className="p-12">
          <Sidebar
            totalTasks={dashboardQuery.data?.taskCount}
            completedTasks={dashboardQuery.data?.completedTaskCount}
          />
        </div>
      </main>
    </ProtectedRoute>
  );
}
