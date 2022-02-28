class User {
  private email: string
  private password: string
  private _id: string | null
  constructor(email: string, password: string, _id: string | null) {
    this.email = email
    this.password = password
    this._id = _id
  }

  get userEmail() {
    return this.email
  }

  get userPassword() {
    return this.password
  }
}

export default User
