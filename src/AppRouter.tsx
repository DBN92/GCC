import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import DataOwnerPortal from "./apps/DataOwnerPortal";
import ConsentSystem from "./apps/ConsentSystem";

// Configuração otimizada do QueryClient para produção
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutos
      gcTime: 10 * 60 * 1000, // 10 minutos
      retry: 3,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 1,
    },
  },
});

export enum AppType {
  DATA_OWNER_PORTAL = 'data-owner-portal',
  CONSENT_SYSTEM = 'consent-system'
}

const AppRouter: React.FC = () => {
  const [currentApp, setCurrentApp] = useState<AppType>(AppType.DATA_OWNER_PORTAL);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('🚀 AppRouter v2.0 - Produção Otimizada');
    
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;
    const subdomain = hostname.split('.')[0];
    
    console.log('🌐 Detalhes da URL:', { hostname, pathname, subdomain });
    
    // Lógica super simplificada e robusta
    let detectedApp = AppType.DATA_OWNER_PORTAL; // Padrão
    
    try {
      // Detecção por subdomínio
      if (subdomain === 'consent' || subdomain === 'consentimento') {
        detectedApp = AppType.CONSENT_SYSTEM;
        console.log('✅ Sistema de Consentimento detectado por subdomínio');
      }
      // Detecção por path
      else if (pathname.includes('/consent') || pathname.includes('/consentimento')) {
        detectedApp = AppType.CONSENT_SYSTEM;
        console.log('✅ Sistema de Consentimento detectado por path');
      }
      // Produção sempre Portal do Titular por padrão
      else if (hostname.includes('danieltechsolutions.com') || hostname.includes('gccimonitore')) {
        detectedApp = AppType.DATA_OWNER_PORTAL;
        console.log('✅ Portal do Titular detectado (produção)');
      }
      // Desenvolvimento
      else {
        detectedApp = AppType.DATA_OWNER_PORTAL;
        console.log('🏠 Portal do Titular (desenvolvimento)');
      }
    } catch (error) {
      console.error('❌ Erro na detecção:', error);
      detectedApp = AppType.DATA_OWNER_PORTAL; // Fallback seguro
    }
    
    setCurrentApp(detectedApp);
    setIsLoading(false);
    
    console.log(`✅ Aplicação configurada: ${detectedApp}`);
  }, []);

  // Loading state otimizado
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Open Consent Imonitore</h2>
          <p className="text-gray-600">Carregando aplicação...</p>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-gray-50">
            {currentApp === AppType.DATA_OWNER_PORTAL && (
              <React.Suspense fallback={
                <div className="flex items-center justify-center min-h-screen">
                  <div className="animate-pulse text-lg">Carregando Portal do Titular...</div>
                </div>
              }>
                <DataOwnerPortal />
              </React.Suspense>
            )}
            
            {currentApp === AppType.CONSENT_SYSTEM && (
              <React.Suspense fallback={
                <div className="flex items-center justify-center min-h-screen">
                  <div className="animate-pulse text-lg">Carregando Sistema de Consentimento...</div>
                </div>
              }>
                <ConsentSystem />
              </React.Suspense>
            )}
          </div>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default AppRouter;