import UserService from '../services/user'

export async function registerUser(email: string, password: string) {
  try {
    const response = await UserService().registerUser(email, password)
  } catch (err) {}
}
