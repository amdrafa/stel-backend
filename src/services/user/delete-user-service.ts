import { User } from "../../models/user-model"
import { IRegisterUserDTO, IUpdateUserDTO, IUsersRepository } from "../../repositories/IUsers-repository"
import { UserAlreadyExistsError } from "../errors/user-already-exists-error"
import bcrypt from "bcrypt"
import { UserNotFoundError } from "../errors/user-not-found-error"

// interface UpdateUserServiceResponse {
//     user: User
// }

export class DeleteUserService {
    constructor(private usersRepository: IUsersRepository) { }

    async execute(id: number) {

        const user = await this.usersRepository.findUserById(id)

        if (!user) {
            throw new UserNotFoundError()
        }

        return await this.usersRepository.delete(id)
    }
}