import React, { useEffect } from 'react'
import useStore from '../../store'
// TODO add functionlity to auth provider wrapper
function AuthProvider(props: any) {
  const isAuthenticated = useStore((state) => state.isAuthenticated)
  useEffect(() => {
    console.log('Checking auth', isAuthenticated)
  })
  return <div>{props.children}</div>
}

export default AuthProvider
