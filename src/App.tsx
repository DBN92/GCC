import AppRouter from './AppRouter'
import './App.css'

function App() {
  return (
    <>
      {/* Deploy Test Indicator - Super Visível */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#ff0000',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '16px',
        zIndex: 9999,
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
      }}>
        🚀 DEPLOY TEST v6.0 - LIMPEZA AGRESSIVA LOCALSTORAGE + LOGS DETALHADOS ✅
      </div>
      <AppRouter />
    </>
  )
}

export default App;
