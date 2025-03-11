import TaskCard from "./TaskCard";

type TasksPhasesProps = {
  tasks: {
    title: string;
    subtitle: string;
    description: string;
  }[];
};

const TasksPhases = ({ tasks }: TasksPhasesProps) => {
  return (
    <section>
      <h2 className="text-2xl font-extrabold tracking-[-0.05em] mb-4">
        Na co se teď zaměřit
      </h2>

      <div className="flex flex-wrap gap-4">
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            title={task.title}
            subtitle={task.subtitle}
            description={task.description}
          />
        ))}
      </div>
    </section>
  );
};

export default TasksPhases;
