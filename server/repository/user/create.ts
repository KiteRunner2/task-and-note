import { usersCollection } from '../../db'
import User from '../../db/models/user'

async function createUser(email: string, password: string) {
  const newUser = new User(email, password, null)
  await usersCollection.insertOne({
    email: newUser.userEmail,
    password: newUser.userPassword,
  })
}

export default {
  createUser,
}
