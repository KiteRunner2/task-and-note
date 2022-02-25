import React from 'react'
import './index.css'

function LoginRegisterCard(props: { children: React.ReactNode }) {
  return <div className="loginregister__card">{props.children}</div>
}

export default LoginRegisterCard
