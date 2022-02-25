import React from 'react'
import './index.css'

function LoginRegisterContainer(props: { children: React.ReactNode }) {
  return <div className="loginregister-container">{props.children}</div>
}

export default LoginRegisterContainer
