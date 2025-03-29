import PhaseContent from "@/app/components/PhaseContent";
import PhaseNavigationSidebar from "@/app/components/PhaseSidebar";
import PhaseTasks from "@/app/components/PhaseTasks";
const ProcessPage = () => {
  // Simulovaná data (později bude dynamicky z DB)
  const phase = {
    title: "Fáze 1 – Příprava",
    contentPages: [
      { title: "Úvod do programu", content: "Zde je text o programu..." },
      { title: "Jak vyplnit dokumenty", content: "Návody, checklisty atd." },
    ],
  };

  const tasks = [
    {
      title: "Test z angličtiny",
      subtitle: "IELTS",
      description:
        "Zaregistruj se na test IELTS a začni s přípravou. Minimální skóre 6.0.",
      isCompleted: false,
    },
    {
      title: "Motivační dopis",
      subtitle: "pro hostitelskou rodinu",
      description: "Napiš dopis rodině, napiš o svých zájmech a očekáváních.",
      isCompleted: false,
    },
  ];

  const phasesList = [
    { id: "1", title: "Fáze 1 – Příprava" },
    { id: "2", title: "Fáze 2 – Přihláška k partnerské organizaci" },
    { id: "3", title: "Fáze 3 – Test z angličtiny" },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4 lg:p-10">
      {/* Navigační sloupec */}
      <aside className="lg:w-1/4 w-full">
        <PhaseNavigationSidebar phases={phasesList} currentPhaseId="1" />
      </aside>

      {/* Obsah fáze + tasky */}
      <main className="lg:w-3/4 w-full flex flex-col gap-12">test</main>
    </div>
  );
};

export default ProcessPage;
