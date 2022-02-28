import UserRepo from '../repository/user'

async function registerUser(email: string, password: string) {
  await UserRepo.Create.createUser(email, password)
}

export default {
  registerUser,
}
