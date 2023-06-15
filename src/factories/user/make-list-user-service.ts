import { TypeOrmUsersRepository } from "../../repositories/typeorm/typeorm-users-repository"
import { ListUserService } from "../../services/user/list-user-service"


export function makeListUserService() {
    const usersRepository = new TypeOrmUsersRepository()
    return new ListUserService(usersRepository)
}