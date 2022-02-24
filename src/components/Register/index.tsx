import React from 'react'
import './Register.css'
import Button from '../Button'
import { Link } from 'react-router-dom'
import { registerUser } from '../../actions/user'

function Register() {
  async function handleRegister() {
    await registerUser('mama', 'tata')
  }

  return (
    <div className="register-container">
      <div className="register-card">
        <input type="text" />
        <input type="password" />
        <Button onClick={handleRegister} type="primary">
          Register
        </Button>
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default Register
