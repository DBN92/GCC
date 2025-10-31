import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import DataOwnerPortal from "./apps/DataOwnerPortal";
import ConsentSystem from "./apps/ConsentSystem";

const queryClient = new QueryClient();

export enum AppType {
  DATA_OWNER_PORTAL = 'data-owner-portal',
  CONSENT_SYSTEM = 'consent-system'
}

const AppRouter = () => {
  const [currentApp, setCurrentApp] = useState<AppType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('🚀 AppRouter iniciado - versão simplificada');
    
    const hostname = window.location.hostname;
    console.log('🌐 Hostname:', hostname);
    
    // LÓGICA SUPER SIMPLIFICADA: Se for produção, sempre Portal do Titular
    if (hostname.includes('danieltechsolutions.com') || hostname.includes('gccimonitore')) {
      console.log('✅ PRODUÇÃO DETECTADA - Carregando Portal do Titular');
      setCurrentApp(AppType.DATA_OWNER_PORTAL);
    } else {
      console.log('🏠 DESENVOLVIMENTO - Carregando Portal do Titular por padrão');
      setCurrentApp(AppType.DATA_OWNER_PORTAL);
    }
    
    setIsLoading(false);
    console.log('✅ AppRouter configurado');
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Carregando aplicação...</p>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-gray-50">
            {currentApp === AppType.DATA_OWNER_PORTAL && <DataOwnerPortal />}
            {currentApp === AppType.CONSENT_SYSTEM && <ConsentSystem />}
          </div>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default AppRouter;