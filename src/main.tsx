import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Configuração de produção
const isDevelopment = import.meta.env.DEV;

// Error boundary simples para produção
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('🚨 Erro capturado pelo ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Ops! Algo deu errado
            </h1>
            <p className="text-gray-600 mb-6">
              Ocorreu um erro inesperado. Por favor, recarregue a página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              🔄 Recarregar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Função para inicializar a aplicação
function initializeApp() {
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.error('❌ Elemento root não encontrado!');
    return;
  }

  console.log('🚀 Inicializando Open Consent Imonitore...');
  console.log('🔧 Modo:', isDevelopment ? 'Desenvolvimento' : 'Produção');
  
  const root = createRoot(rootElement);
  
  // Renderizar com ou sem StrictMode baseado no ambiente
  const AppComponent = isDevelopment ? (
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>
  ) : (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );

  root.render(AppComponent);
  
  console.log('✅ Aplicação inicializada com sucesso!');
}

// Inicializar quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

// Tratamento global de erros não capturados
window.addEventListener('error', (event) => {
  console.error('🚨 Erro global capturado:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('🚨 Promise rejeitada não tratada:', event.reason);
});
