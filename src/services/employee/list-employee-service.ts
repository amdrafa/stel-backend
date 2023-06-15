import { Area } from "../../models/area-model"
import { Employee } from "../../models/employee-model"
import { IAreaRepository } from "../../repositories/IArea-repository"
import { IEmployeeRepository } from "../../repositories/IEmployee-repository"

export class ListEmployeeService {
    constructor(private repository: IEmployeeRepository) { }

    async execute(): Promise<Employee[] | null> {

        return await this.repository.list()
    }
}