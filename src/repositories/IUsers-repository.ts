import { UpdateResult } from "typeorm";
import { User } from "../models/user-model"
import { UserStatusEnum } from "../enums/user-status-enum";

export interface IRegisterUserDTO {
    name: string;
    password: string;
    email: string;
}

export interface IUpdateUserDTO {
    id: number;
    name?: string;
    password?: string;
    email?: string;
    //status: UserStatusEnum
}

export interface IUsersRepository {
    create(user: IRegisterUserDTO): Promise<User>
    list(): Promise<User[]>
    findUserById(id: number): Promise<User | null>
    findUserByEmail(email: string): Promise<User | null>
    update(user: IUpdateUserDTO): Promise<User | UpdateResult>
    delete(id: number): Promise<UpdateResult>;
}