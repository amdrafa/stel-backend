import { Area } from "../../models/area-model"
import { IAreaRepository, IRegisterAreaDTO } from "../../repositories/IArea-repository"
import { IEmployeeRepository } from "../../repositories/IEmployee-repository"
import { AreaAlreadyExistsError } from "../errors/area-already-exists-error"
import { AreaNotFoundError } from "../errors/area-not-found"
import { EmployeeNotFoundError } from "../errors/employee-not-found"

export class DeleteEmployeeService {
    constructor(private repository: IEmployeeRepository) { }

    async execute(id: number) {

        const employee = await this.repository.findById(id)

        if(!employee){
            throw new EmployeeNotFoundError()
        }

        return await this.repository.delete(id)
    }
}