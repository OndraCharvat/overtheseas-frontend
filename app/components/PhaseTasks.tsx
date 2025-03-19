import TaskCard from "./TaskCard";

type TasksProps = {
  tasks: {
    title: string;
    subtitle: string;
    description: string;
  }[];
};

const PhaseTasks = ({ tasks }: TasksProps) => {
  return (
    <section>
      <h2 className="text-2xl font-extrabold tracking-[-0.05em] mb-4">
      Úkoly pro tuto fázi
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

export default PhaseTasks;