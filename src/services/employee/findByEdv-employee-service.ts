import { Area } from "../../models/area-model"
import { IAreaContactRepository, IUpdateAreaContactDTO } from "../../repositories/IArea-contact-repository"
import { IEmployeeRepository } from "../../repositories/IEmployee-repository"
import { AreaContactNotFoundError } from "../errors/area-contact-not-found"
import { EmployeeNotFoundError } from "../errors/employee-not-found"

export class FindByEdvEmployeeService {
    constructor(private repository: IEmployeeRepository) { }

    async execute(edv: number) {

        const employee = await this.repository.findByEDV(edv)

        if(!employee){
            throw new EmployeeNotFoundError()
        }

        return employee
    }
}