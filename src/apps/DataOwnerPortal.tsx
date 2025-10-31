import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import GovBrLogin from "../pages/GovBrLogin";

function DataOwnerPortalContent() {
  console.log('🔍 DataOwnerPortal - Versão Simplificada');

  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<GovBrLogin />} />
        <Route path="*" element={<GovBrLogin />} />
      </Routes>
    </div>
  );
}

const DataOwnerPortal: React.FC = () => {
  return (
    <AuthProvider>
      <DataOwnerPortalContent />
    </AuthProvider>
  );
};

export default DataOwnerPortal;