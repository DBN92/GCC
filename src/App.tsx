import AppRouter from "./AppRouter";

const App = () => {
  return (
    <>
      {/* Indicador temporário de versão - Deploy Test v2.0 */}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        right: 0, 
        background: '#ff0000', 
        color: 'white', 
        padding: '4px 8px', 
        fontSize: '12px', 
        zIndex: 9999 
      }}>
        Deploy Test v2.0 - {new Date().toISOString()}
      </div>
      <AppRouter />
    </>
  );
};

export default App;
