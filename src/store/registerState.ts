const createRegisterStateSlice = (set: any, get: any) => {
  return {
    isRegistering: false,
    setIsRegistering: (registeringState: boolean) => {
      set((state: any) => {
        return { isRegistering: registeringState }
      })
    },
    setIsRegisteringSuccessful: (registeringState: boolean) => {
      set((state: any) => {
        return { isRegisteringSuccessfull: registeringState }
      })
    },
    setError: (error: string | null) => {
      set((state: any) => {
        return { error }
      })
    },
  }
}

export default createRegisterStateSlice
