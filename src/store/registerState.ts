type returnType = {
  isRegistering: boolean
  registeringError: string | null
  setIsRegistering: Function
  setIsRegisteringSuccessfull: Function
  setError: Function
}

const createRegisterStateSlice = (set: any, get: any): returnType => {
  return {
    isRegistering: false,
    registeringError: null,
    setIsRegistering: (registeringState: boolean) => {
      set((state: any) => {
        return { isRegistering: registeringState }
      })
    },
    setIsRegisteringSuccessfull: (registeringState: boolean) => {
      set((state: any) => {
        return { isRegisteringSuccessfull: registeringState }
      })
    },
    setError: (error: string | null) => {
      set((state: any) => {
        return { registeringError: error }
      })
    },
  }
}

export default createRegisterStateSlice
