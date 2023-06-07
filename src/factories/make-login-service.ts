import { TypeOrmUsersRepository } from "../repositories/typeorm/typeorm-users-repository"
import { LoginUserService } from "../services/user/login-service"


export function makeLoginService() {
    const usersRepository = new TypeOrmUsersRepository()
    const loginService = new LoginUserService(usersRepository)

    return loginService
}