import axios from "axios";

export const handleGetDashboard = async (token: string) => {
  const response: IDashboard = await axios
    .get("http://localhost:3001/profile/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
  return response;
};

export interface IDashboard {
  phases: {
    id: string;
    title: string;
  }[];
  taskCount: number;
  completedTaskCount: number;
  completedTasksIds: string[];
  currentPhaseTasks: {
    id: string;
    title: string;
  }[];
  currentPhaseId: string;
}
