import { usersCollection } from '../../db'
import User from '../../db/models/user'

async function getUserByEmail(email: string) {
  const user = await usersCollection.findOne({ email })
  if (user) {
    return new User(user.email, user.password, user._id.toString())
  }
  return null
}

export default {
  getUserByEmail,
}
