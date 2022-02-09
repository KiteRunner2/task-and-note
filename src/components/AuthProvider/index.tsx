import React, { useEffect } from 'react'
import useStore from '../../store'
import { Navigate } from 'react-router-dom'
// TODO add functionlity to auth provider wrapper

type Props = {
  children?: React.ReactNode
}
function AuthProvider(props: Props) {
  const isAuthenticated = useStore((state) => state.isAuthenticated)

  useEffect(() => {
    console.log('Checking auth', isAuthenticated)
  })
  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }
  return <>{props.children}</>
}

export default AuthProvider
