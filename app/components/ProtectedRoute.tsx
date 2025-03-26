"use client";

import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
        loginWithRedirect();
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) return <div className="p-10 flex font-medium tracking-[-0.02em]"> <p>Načítání</p> </div>;
  if (!isAuthenticated) return null; 

  return <>{children}</>;
}
