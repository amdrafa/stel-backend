import { TypeOrmUsersRepository } from "../../repositories/typeorm/typeorm-users-repository"
import { RegisterUserService } from "../../services/user/register-user-service"


export function makeRegisterUserService() {
    const usersRepository = new TypeOrmUsersRepository()
    const registerUserService = new RegisterUserService(usersRepository)

    return registerUserService
}