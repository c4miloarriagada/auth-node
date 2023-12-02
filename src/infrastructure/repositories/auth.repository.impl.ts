import {
  AuthDatasource,
  AuthRepository,
  RegisterUserDto,
  UserEntiy
} from '../../domain'

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly datasource: AuthDatasource) {}

  register(registerUserDto: RegisterUserDto): Promise<UserEntiy> {
    return this.datasource.register(registerUserDto)
  }
}
