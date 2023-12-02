import { Validators } from '../../../config'

export class RegisterUserDto {
  private constructor(
    public name: string,
    public email: string,
    public password: string
  ) {}

  static create(body: { [key: string]: any }): [string?, RegisterUserDto?] {
    const { name, email, password } = body

    if (!name) return ['Missing Name']
    if (!email) return ['Missing Email']
    if (!Validators.email.test(email as string)) return ['Email is not valid']
    if (!password) return ['Missing password']
    if (password.length < 6) return ['Password to short']
    return [undefined, new RegisterUserDto(name, email, password)]
  }
}
