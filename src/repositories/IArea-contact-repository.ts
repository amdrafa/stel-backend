import { DeleteResult, UpdateResult } from "typeorm";
import { Area } from "../models/area-model";
import { AreaContact } from "../models/area-contact-model";


export interface IRegisterAreaContactDTO {
    name: string;
    email: string;
    area: Area
}

export interface IUpdateAreaContactDTO {
    id: number;
    name?: string;
    email?:string;
}

export interface IAreaContactRepository {
    create(areaContact: IRegisterAreaContactDTO): Promise<AreaContact>
    update(areaContact: IUpdateAreaContactDTO): Promise<AreaContact | UpdateResult>
    list(): Promise<AreaContact[] | null>
    findById(id: number): Promise<AreaContact | null>
    findByEmail(email: string): Promise<AreaContact | null>
    delete(id: number): Promise<DeleteResult>;
}