import React from 'react'
import AuthProvider from './components/AuthProvider'
import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'

function Layout() {
  return (
    <div>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
