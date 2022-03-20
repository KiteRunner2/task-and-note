import express from 'express'
import userController from '../controllers/users'

const router = express.Router()

router.get('/', userController.getUser)

router.post('/', userController.registerUser)

export default router
