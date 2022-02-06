import './Login.css'
import Button from '../Button'
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
      </div>
    </div>
  )
}

export default Login
