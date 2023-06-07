import { User } from "../../models/user-model"
import { IRegisterUserDTO, IUsersRepository } from "../../repositories/IUsers-repository"
import { UserAlreadyExistsError } from "../errors/user-already-exists-error"
import bcrypt from "bcrypt"
import { UserNotFoundError } from "../errors/user-not-found-error"
import { UserPasswordIncorrectError } from "../errors/user-password-incorrect-error"

export class LoginUserService {
    constructor(private usersRepository: IUsersRepository) { }

    async execute(email: string, password: string ): Promise<User> {

        const user = await this.usersRepository.findUserByEmail(email)

        if(!user){
            throw new UserNotFoundError()
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password as string)

        if(!isPasswordCorrect){
            throw new UserPasswordIncorrectError()
        }

        return user
    }
}