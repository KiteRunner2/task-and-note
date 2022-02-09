import './Login.css'
import Button from '../Button'
import { Link } from 'react-router-dom'
function Login() {
  function handleClick() {
    console.log('clicked')
  }
  return (
    <div className="login-container">
      <div className="login-card">
        <input type="text" />
        <input type="password" />
        <Button onClick={handleClick}>Login</Button>
        <Link to="/register">Register</Link>
      </div>
    </div>
  )
}

export default Login
