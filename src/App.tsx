import AppRouter from './AppRouter'
import './App.css'

function App() {
  return (
    <>
      {/* INDICADOR DE DEPLOY SUPER VISÍVEL */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#ff0000',
        color: '#ffffff',
        padding: '20px',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        zIndex: 9999,
        border: '5px solid #000000',
        boxShadow: '0 0 20px rgba(255,0,0,0.8)'
      }}>
        🔥 DEPLOY TEST v4.0 FINAL - {new Date().toLocaleString('pt-BR')} 🔥
        <br />
        NIXPACKS.TOML ATUALIZADO + COOLIFY CONFIG
      </div>
      <AppRouter />
    </>
  )
}

export default App;
