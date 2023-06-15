import { User } from "../../models/user-model"
import { IRegisterUserDTO, IUpdateUserDTO, IUsersRepository } from "../../repositories/IUsers-repository"
import { UserAlreadyExistsError } from "../errors/user-already-exists-error"
import bcrypt from "bcrypt"

// interface UpdateUserServiceResponse {
//     user: User
// }

export class UpdateUserService {
    constructor(private usersRepository: IUsersRepository) { }

    async execute({ id, name, email, password }: IUpdateUserDTO): Promise<User> {

        const hashedPassword = await bcrypt.hash(password, 10)

        const userWithSameEmail = await this.usersRepository.findUserByEmail(email)

        if (userWithSameEmail) {
            throw new UserAlreadyExistsError()
        }

        const user = await this.usersRepository.update({ id, name, email,password:hashedPassword })

        return user as User
    }
}