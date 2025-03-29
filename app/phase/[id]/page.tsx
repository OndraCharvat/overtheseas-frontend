"use client";

import PhaseContent from "@/app/components/PhaseContent";
import PhaseTasks from "@/app/components/PhaseTasks";
import { handleGetPhase } from "@/app/handlers/phaseHandler";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";

const PhasePage = () => {
  const { getAccessTokenSilently } = useAuth0();
  const params = useParams();
  const phaseId = params.id as string;

  const getPhaseQuery = useQuery({
    queryKey: ["phase", phaseId],
    queryFn: async () => {
      const token = await getAccessTokenSilently();
      return handleGetPhase(token, phaseId || "");
    },
  });

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4 lg:p-10">
      <main className="w-full flex flex-col gap-12">
        <h1 className="text-5xl font-semibold capitalize">
          {getPhaseQuery.data?.title}
        </h1>
        <p className="text-xl">{getPhaseQuery.data?.description}</p>
        <PhaseContent description={getPhaseQuery.data?.blob} />
        <PhaseTasks tasks={getPhaseQuery.data?.tasks} />
      </main>
    </div>
  );
};

export default PhasePage;
