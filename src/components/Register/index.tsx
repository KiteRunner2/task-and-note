import React from 'react'
import './Register.css'
import Button from '../Button'
import { Link } from 'react-router-dom'
function Register() {
  function handleClick() {
    console.log('clicked')
  }
  return (
    <div className="register-container">
      <div className="register-card">
        <input type="text" />
        <input type="password" />
        <Button onClick={handleClick} type="primary">Register</Button>
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default Register
