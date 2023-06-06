import { User } from "../../models/user-model";
import { IRegisterUserDTO, IUsersRepository } from "../../repositories/IUsers-repository";
import { UserAlreadyExistsError } from "../errors/user-already-exists-error";

interface RegisterUserServiceResponse {
    user: User
}

export class RegisterUserService {
    constructor(private usersRepository: IUsersRepository) { }

    async execute({ age, name, email }: IRegisterUserDTO): Promise<RegisterUserServiceResponse> {

        const userWithSameEmail = await this.usersRepository.findUserByEmail(email)

        if (userWithSameEmail) {
            throw new UserAlreadyExistsError()
        }

        const user = await this.usersRepository.create({ age, name, email })

        return {
            user
        }
    }
}