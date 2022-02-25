import UserService from '../services/user'
import useStore from '../store'

export async function registerUser(email: string, password: string) {
  useStore.setState({ isRegistering: true })
  try {
    const response = await UserService().registerUser(email, password)
    useStore.setState({ isRegistering: false })
  } catch (err) {
    useStore.setState({
      registeringError: 'Error registering user.Please try again later',
    })
  }
}
