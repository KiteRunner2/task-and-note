import { usersCollection } from '../../db'

export async function createUser(req: any, res: any) {
  const age = Math.floor(Math.random() * 100)
  await usersCollection.insertOne({ name: 'przemek', age })
  res.status(200).end()
}

export async function getUser(req: any, res: any) {
  const user = await usersCollection.find({ age: 31 }).toArray()
  res.status(200).json(user)
}

export default {
  createUser,
}
