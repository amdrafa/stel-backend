import { Repository, UpdateResult } from "typeorm";
import { User } from "../../models/user-model";
import { IRegisterUserDTO, IUpdateUserDTO, IUsersRepository } from "../IUsers-repository"
import { AppDataSource } from "../../data-source";

export class TypeOrmUsersRepository implements IUsersRepository {

    private repository: Repository<User>

    constructor() {
        this.repository = AppDataSource.getRepository(User)
    }

    
    async findUserById(id: number) {
        return await this.repository.findOneBy({ id: id })
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
        return this.repository.find()
    }

    async update(user: IUpdateUserDTO) {
        return await this.repository.update(user.id, user);
    }

    async delete(id: number): Promise<UpdateResult> {
        return await this.repository.softDelete(id);
    }
}