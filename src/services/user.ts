import { axiosClient } from '../axios'

export default function userService() {
  return {
    registerUser: (email: string, password: string) => {
      return axiosClient.request({
        method: 'POST',
        url: '/user',
        data: {
          email,
          password,
        },
      })
    },
  }
}
