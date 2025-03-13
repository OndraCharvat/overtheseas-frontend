import Link from "next/link";

type PhaseNavigationSidebarProps = {
  phases: { id: string; title: string }[];
  currentPhaseId: string;
};

const PhaseNavigationSidebar = ({
  phases,
  currentPhaseId,
}: PhaseNavigationSidebarProps) => {
  return (
    <div className="bg-brightpurple rounded-2xl p-4 shadow-lg">
      <h3 className="text-lg font-bold mb-4">Všechny fáze</h3>
      <ul className="space-y-2">
        {phases.map((phase) => (
          <li key={phase.id}>
            <Link
              href={`/section/${phase.id}`}
              className={`block px-3 py-2 rounded-xl transition-all ${
                currentPhaseId === phase.id
                  ? "bg-purpleots text-white font-semibold"
                  : "hover:bg-secondary"
              }`}
            >
              {phase.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhaseNavigationSidebar;
