import React, { useState } from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'
import { registerUser } from '../../actions/user'
import useStore from '../../store'
import TextInput from '../TextInput'
import LoginRegisterContainer from '../../containers/LoginRegisterContainer'
import LoginRegisterCard from '../../containers/LoginRegisterCard'

function Error(props: { errorMsg: string | null }) {
  if (!props.errorMsg) return null
  return <div>{props.errorMsg}</div>
}

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const registeringError = useStore((state) => state.registeringError)

  function isValidInput() {
    if (!email || !password) {
      return false
    }
    return true
  }

  async function handleRegister() {
    if (!isValidInput()) {
      setError('ivalid input')
      return
    }
    await registerUser(email, password)
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }
  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

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
        <Button onClick={handleRegister} type="primary">
          Register
        </Button>
        <Link to="/login">Login</Link>
      </LoginRegisterCard>
      <Error errorMsg={registeringError || error} />
    </LoginRegisterContainer>
  )
}

export default Register
