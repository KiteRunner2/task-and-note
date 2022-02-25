const createAuthStateSlice = (set: any, get: any) => {
  return {
    isAuthenticated: false,
    isAuthenticating: false,
    user: {},
    setAuthenticated: (authState: boolean) => {
      set((state: any) => {
        return { isAuthenticated: authState }
      })
    },
    setIsAuthenticating: (authState: boolean) => {
      set((state: any) => {
        return { isAuthenticating: authState }
      })
    },
  }
}

export default createAuthStateSlice
