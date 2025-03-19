"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TaskCard from "./TaskCard";

type TasksProps = {
  tasks: {
    title: string;
    subtitle: string;
    description: string;
    isCompleted: boolean;
  }[];
};

const PhaseTasks = ({ tasks }: TasksProps) => {
  const [taskStates, setTaskStates] = useState(tasks.map((task) => task.isCompleted));
  const router = useRouter();

  const handleToggle = (index: number) => {
    const updated = [...taskStates];
    updated[index] = !updated[index];
    setTaskStates(updated);
  };

  const allTasksCompleted = taskStates.every((state) => state);

  const handleSave = () => {
    if (allTasksCompleted) {
      router.push("/section/{id}");
    }
  };

  return (
    <section>
      <h2 className="text-2xl font-extrabold tracking-[-0.05em] mb-4">
        Úkoly pro tuto fázi
      </h2>

      <div className="flex flex-wrap gap-4 mb-6">
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            title={task.title}
            subtitle={task.subtitle}
            description={task.description}
            isCompleted={taskStates[index]}
            onToggle={() => handleToggle(index)}
          /> 
        ))}
      </div>

      <button
        onClick={handleSave}
        disabled={!allTasksCompleted}
        className={`px-6 py-3 rounded-xl font-semibold transition ${
          allTasksCompleted
            ? "bg-secondary text-white tracking-[-0.05em] font-extrabold rounded-full hover:bg-purpleots transition" 
            : "bg-gray-300 text-white tracking-[-0.05em] rounded-full cursor-not-allowed"
        }`}
      >
        Uložit a pokračovat
      </button>
    </section>
  );
};

export default PhaseTasks;
