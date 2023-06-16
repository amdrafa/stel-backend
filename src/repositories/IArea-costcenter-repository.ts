import { DeleteResult, Double, NumericType, UpdateResult } from "typeorm";
import { AreaCostCenter } from "../models/area-costcenter-model";
import { Area } from "../models/area-model";


export interface IRegisterAreaCostCenterDTO {
    code: string,
    description: string,
    hourRate: number,
    grossTariff: NumericType,
    netTariff: NumericType,
    area: Area
}

export interface IUpdateAreaCostCenterDTO {
    id: number;
    code: string,
    description: string,
    hourRate: number,
    grossTariff: NumericType,
    netTariff: NumericType
}

export interface IAreaCostCenterRepository {
    create(areaCostCenter: IRegisterAreaCostCenterDTO): Promise<AreaCostCenter>
    update(areaCostCenter: IUpdateAreaCostCenterDTO): Promise<AreaCostCenter | UpdateResult>
    list(): Promise<AreaCostCenter[] | null>
    findById(id: number): Promise<AreaCostCenter | null>
    findByCode(code: string): Promise<AreaCostCenter | null>
    delete(id: number): Promise<DeleteResult>;
}