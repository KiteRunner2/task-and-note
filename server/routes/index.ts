import express from 'express'
import userController from '../controllers/users'

const router = express.Router()

router.get('/user', userController.getUser)

router.post('/user', userController.registerUser)

export default router
