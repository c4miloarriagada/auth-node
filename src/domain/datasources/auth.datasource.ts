import { RegisterUserDto } from '../dtos/auth/register-user.dto'
import { UserEntiy } from '../entities/user.entity'

export abstract class AuthDatasource {
  // abstract login()
  abstract register(registerUserDto: RegisterUserDto): Promise<UserEntiy>
}
