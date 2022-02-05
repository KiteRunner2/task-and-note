import React from 'react'
import AuthProvider from './components/AuthProvider'
import './App.css'
import useStore from './store'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <div>Hello</div>
      </AuthProvider>
    </div>
  )
}

export default App
