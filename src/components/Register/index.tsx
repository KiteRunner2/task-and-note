import React from 'react'
import './Register.css'
import Button from '../Button'
function Register() {
  function handleClick() {
    console.log('clicked')
  }
  return (
    <div className="login-container">
      <div className="login-card">
        <input type="text" />
        <input type="password" />
        <Button onClick={handleClick}>Register</Button>
      </div>
    </div>
  )
}

export default Register
