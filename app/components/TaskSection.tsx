import React from "react";
import TaskCard from "./TaskCard";

interface TaskSectionProps {
  tasks?: {
    id: string;
    title: string;
  }[];
  completedTasksIds?: string[];
}

const TaskSection = ({ tasks, completedTasksIds }: TaskSectionProps) => {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-extrabold tracking-[-0.05em] mb-4">
        Na co se teď zaměř
      </h2>

      <div className="flex flex-wrap relative gap-4">
        {tasks?.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            completed={completedTasksIds?.includes(task.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default TaskSection;
