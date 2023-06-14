import { UpdateResult } from "typeorm";
import { Area } from "../models/area-model";

export interface IRegisterContactAreaDTO {
    id?: number;
    name: string;
    email: string;
}

export interface IRegisterAreaDTO {
    name: string;
    description: string;
    contacts: IRegisterContactAreaDTO[]
}

export interface IUpdateAreaDTO {
    id: number;
    name: string;
    description: string;
    contacts?: IRegisterContactAreaDTO[]
}

export interface IAreaRepository {
    create(area: IRegisterAreaDTO): Promise<Area>
    update(area: IUpdateAreaDTO): Promise<Area | UpdateResult>
    list(): Promise<Area[] | null>
    findById(id: number): Promise<Area | null>
    findByName(name: string): Promise<Area | null>
}