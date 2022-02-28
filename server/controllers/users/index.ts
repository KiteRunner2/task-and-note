import { usersCollection } from '../../db'
import UserService from '../../services/user'

export async function registerUser(req: any, res: any) {
  const { email, password } = req.body
  try {
    await UserService.registerUser(email, password)
  } catch (err) {
    return res.status(500).end()
  }
  res.status(200).end()
}

export async function getUser(req: any, res: any) {
  const user = await usersCollection.find({ age: 31 }).toArray()
  res.status(200).json(user)
}

export default {
  registerUser,
  getUser,
}
