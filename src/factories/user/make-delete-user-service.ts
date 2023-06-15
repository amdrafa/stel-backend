import { TypeOrmUsersRepository } from "../../repositories/typeorm/typeorm-users-repository"
import { DeleteUserService } from "../../services/user/delete-user-service"


export function makeDeleteUserService() {
    const usersRepository = new TypeOrmUsersRepository()
    return new DeleteUserService(usersRepository)
}