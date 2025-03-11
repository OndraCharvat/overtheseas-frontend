import React from "react";
import TaskCard from "./TaskCard";

const TaskSection = () => {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-extrabold tracking-[-0.05em] mb-4">
        Na co se teď zaměř
      </h2>

      {/* Seznam úkolů */}
      <div className="flex flex-wrap gap-4">
        <TaskCard
          title="Test z angličtiny"
          subtitle="IELTS"
          description="Zaregistruj se na test IELTS a začni s přípravou. Minimální požadované skóre je 6.0."
        />
        <TaskCard
          title="Study permit"
          subtitle="formulář"
          description="Vyplň a odevzdej formulář pro studijní povolení. Nezapomeň na správné dokumenty!"
        />
        <TaskCard
          title="Motivační dopis"
          subtitle="pro rodinu"
          description="Napiš upřímný a srozumitelný dopis své hostitelské rodině. Můžeš zmínit své koníčky a očekávání."
        />
      </div>
    </section>
  );
};

export default TaskSection;


