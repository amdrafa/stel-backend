import { User } from "../../models/user-model"
import { IRegisterUserDTO, IUpdateUserDTO, IUsersRepository } from "../../repositories/IUsers-repository"
import { UserAlreadyExistsError } from "../errors/user-already-exists-error"
import bcrypt from "bcrypt"

// interface UpdateUserServiceResponse {
//     user: User
// }

export class ListUserService {
    constructor(private usersRepository: IUsersRepository) { }

    async execute(): Promise<User[]> {
        return await this.usersRepository.list()
    }
}