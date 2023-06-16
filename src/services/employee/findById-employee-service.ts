import { Area } from "../../models/area-model"
import { IAreaContactRepository, IUpdateAreaContactDTO } from "../../repositories/IArea-contact-repository"
import { IEmployeeRepository } from "../../repositories/IEmployee-repository"
import { AreaContactNotFoundError } from "../errors/area-contact-not-found"
import { EmployeeNotFoundError } from "../errors/employee-not-found"

export class FindByIdEmployeeService {
    constructor(private repository: IEmployeeRepository) { }

    async execute(id: number) {

        const employee = await this.repository.findById(id)

        if(!employee){
            throw new EmployeeNotFoundError()
        }

        return employee
    }
}