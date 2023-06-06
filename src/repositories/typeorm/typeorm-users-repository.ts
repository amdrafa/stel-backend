import { Repository } from "typeorm";
import { User } from "../../models/user-model";
import { IRegisterUserDTO, IUsersRepository } from "../IUsers-repository"
import { AppDataSource } from "../../data-source";

export class TypeOrmUsersRepository implements IUsersRepository {

    private repository: Repository<User>

    constructor() {
        this.repository = AppDataSource.getRepository(User)
    }
    async findUserByEmail(email: string) {
        const user = await this.repository.findOneBy({
            email: email
        })
        return user
    }

    async create(user: IRegisterUserDTO): Promise<User> {
        const newUser = this.repository.create(user)
        await this.repository.save(newUser)
        return newUser
    }


    async list(): Promise<User[]> {
        const allUsers = this.repository.find()
        return allUsers
    }
}