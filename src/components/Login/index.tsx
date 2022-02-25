import React, { useState } from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'
import LoginRegisterContainer from '../../containers/LoginRegisterContainer'
import LoginRegisterCard from '../../containers/LoginRegisterCard'
import TextInput from '../TextInput'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }
  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  function handleLogin(): void {}
  return (
    <LoginRegisterContainer>
      <LoginRegisterCard>
        <TextInput
          type="text"
          value={email}
          onInputChange={handleEmailChange}
          placeholder="Your email"
        />
        <TextInput
          type="password"
          value={password}
          onInputChange={handlePasswordChange}
          placeholder="Your password"
        />
        <Button onClick={handleLogin} type="primary">
          Login
        </Button>
        <Link to="/register">Register</Link>
      </LoginRegisterCard>
    </LoginRegisterContainer>
  )
}

export default Login
