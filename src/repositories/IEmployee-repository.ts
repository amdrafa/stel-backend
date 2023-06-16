import { DeleteResult, UpdateResult } from "typeorm";
import { Area } from "../models/area-model";
import { EmployeeStatusEnum } from "../enums/employee-status";
import { Employee } from "../models/employee-model";

export interface IRegisterEmployeeDTO {
    edv: number;
    name: string;
    position: string
    sapStartDate?: Date;
	customStartDate?: Date;
	sapEndDate?: Date;
	customEndDate?: Date;
}

export interface IUpdateEmployeeDTO {
    id: number;
    edv: number;
    name: string;
    position: string
    sapStartDate?: Date;
	customStartDate?: Date;
	sapEndDate?: Date;
	customEndDate?: Date;
    status: EmployeeStatusEnum
}

export interface IEmployeeRepository {
    create(employee: IRegisterEmployeeDTO): Promise<Employee>
    update(employee: IUpdateEmployeeDTO): Promise<Employee | UpdateResult>
    list(): Promise<Employee[] | null>
    findById(id: number): Promise<Employee | null>
    findByEDV(edv: number): Promise<Employee | null>
    delete(id: number): Promise<DeleteResult>;
}