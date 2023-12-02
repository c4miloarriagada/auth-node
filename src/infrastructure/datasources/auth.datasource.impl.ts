import {
  AuthDatasource,
  CustomError,
  RegisterUserDto,
  UserEntiy
} from '../../domain'

export class AuthDataSourceImpl implements AuthDatasource {
  async register(registerUserDto: RegisterUserDto): Promise<UserEntiy> {
    const { email, name, password } = registerUserDto

    try {
      return new UserEntiy('1', name, email, password, ['ADMIN_ROLE'])
    } catch (error) {
      if (error instanceof CustomError) {
        throw error
      }

      throw CustomError.internalServerError()
    }
  }
}
