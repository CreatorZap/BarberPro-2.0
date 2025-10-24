import { useState, useEffect } from 'react'

function App() {
  const [message, setMessage] = useState<string>('Carregando...')

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage('Backend offline'))
  }, [])

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      fontFamily: 'system-ui',
      gap: '1rem'
    }}>
      <h1 style={{ fontSize: '3rem', margin: 0 }}>🔥 BarberPro 2.0</h1>
      <p style={{ fontSize: '1.5rem', color: '#666' }}>Sistema Completo para Barbearias</p>
      <div style={{ 
        padding: '1rem 2rem', 
        background: '#f0f0f0', 
        borderRadius: '8px',
        marginTop: '2rem'
      }}>
        <p style={{ margin: 0 }}>Status Backend: <strong>{message}</strong></p>
      </div>
    </div>
  )
}

export default App
