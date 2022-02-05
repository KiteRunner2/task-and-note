import create from 'zustand'
import { devtools } from 'zustand/middleware'
import authState from './authState'

const store = (set: any, get: any) => ({
  ...authState(set, get),
})

const useStore = create(devtools(store))

export default useStore
