import { TypeOrmUsersRepository } from "../../repositories/typeorm/typeorm-users-repository"
import { UpdateUserService } from "../../services/user/update-user-service"


export function makeUpdateUserService() {
    const usersRepository = new TypeOrmUsersRepository()
    return new UpdateUserService(usersRepository)
}