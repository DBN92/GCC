import React from 'react';

export function GovBrLogin() {
  console.log('🔍 GovBrLogin - Versão Simplificada');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Portal do Titular</h1>
          <p className="text-gray-600 mb-8">Sistema funcionando corretamente!</p>
          
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            ✅ Aplicação carregada com sucesso
          </div>
        </div>
      </div>
    </div>
  );
}

export default GovBrLogin;