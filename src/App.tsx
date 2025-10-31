import AppRouter from "./AppRouter";

const App = () => {
  return (
    <>
      {/* Indicador temporário de versão - Deploy Test v3.0 */}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        right: 0, 
        background: '#00ff00', 
        color: 'black', 
        padding: '8px 16px', 
        fontSize: '14px', 
        fontWeight: 'bold',
        zIndex: 9999,
        border: '2px solid #000'
      }}>
        🚀 DEPLOY TEST v3.0 - {new Date().toLocaleString('pt-BR')}
      </div>
      <AppRouter />
    </>
  );
};

export default App;
