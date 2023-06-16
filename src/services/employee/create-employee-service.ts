import { Area } from "../../models/area-model"
import { Employee } from "../../models/employee-model"
import { IAreaRepository, IRegisterAreaDTO } from "../../repositories/IArea-repository"
import { IEmployeeRepository, IRegisterEmployeeDTO } from "../../repositories/IEmployee-repository"
import { AreaAlreadyExistsError } from "../errors/area-already-exists-error"
import { AreaNotFoundError } from "../errors/area-not-found"
import { EmployeeAlreadyExistsError } from "../errors/employe-already-exists-error"

export class CreateEmployeeService {
    constructor(private repository: IEmployeeRepository) { }

    async execute(dto: IRegisterEmployeeDTO): Promise<Employee> {

        const employee = await this.repository.findByEDV(dto.edv)

        if(employee){
            throw new EmployeeAlreadyExistsError()
        }

        return this.repository.create(dto)
    }
}