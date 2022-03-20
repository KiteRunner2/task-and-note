import express from 'express'
import userRoutes from './user'

const initPublicRoutes = () => {
  const router = express.Router()
  router.use('/user', userRoutes)
  return router
}

export default {
  initPublicRoutes,
}
