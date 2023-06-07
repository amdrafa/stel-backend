import { User } from "../models/user-model"

export interface IRegisterUserDTO {
    name: string;
    password: string;
    email: string;
}

export interface IUsersRepository {
    create(user: IRegisterUserDTO): Promise<User>
    list(): Promise<User[]>
    findUserByEmail(email: string): Promise<User | null>
}