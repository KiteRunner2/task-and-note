import { DB_URI } from '../config'

import { MongoClient } from 'mongodb'

if (!DB_URI) {
  throw new Error('Need db connection string')
}

const client = new MongoClient(DB_URI)

const dbName = 'task-and-note'

export async function connectDb() {
  try {
    await client.connect()
    console.log('Connected successfully to server')
  } catch (err) {
    console.log('error connecting to database')
    process.exit(1)
  }
}

const db_client = client.db(dbName)
export const usersCollection = db_client.collection('users')
