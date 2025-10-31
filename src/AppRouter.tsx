import React from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DataOwnerPortal from "./apps/DataOwnerPortal";

// Configuração simples do QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const AppRouter: React.FC = () => {
  console.log('🚀 AppRouter - Versão Simplificada');
  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <DataOwnerPortal />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default AppRouter;