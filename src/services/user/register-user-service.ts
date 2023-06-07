import { User } from "../../models/user-model"
import { IRegisterUserDTO, IUsersRepository } from "../../repositories/IUsers-repository"
import { UserAlreadyExistsError } from "../errors/user-already-exists-error"
import bcrypt from "bcrypt"

interface RegisterUserServiceResponse {
    user: User
}

export class RegisterUserService {
    constructor(private usersRepository: IUsersRepository) { }

    async execute({ name, email, password }: IRegisterUserDTO): Promise<RegisterUserServiceResponse> {

        const hashedPassword = await bcrypt.hash(password, 10)

        const userWithSameEmail = await this.usersRepository.findUserByEmail(email)

        if (userWithSameEmail) {
            throw new UserAlreadyExistsError()
        }

        const user = await this.usersRepository.create({ password:hashedPassword, name, email })

        return {
            user
        }
    }
}