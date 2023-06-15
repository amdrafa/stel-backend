import { Area } from "../../models/area-model"
import { IAreaRepository, IUpdateAreaDTO } from "../../repositories/IArea-repository"
import { IEmployeeRepository, IUpdateEmployeeDTO } from "../../repositories/IEmployee-repository"
import { AreaNotFoundError } from "../errors/area-not-found"

export class UpdateEmployeeService {
    constructor(private repository: IEmployeeRepository) { }

    async execute(dto: IUpdateEmployeeDTO) {

        const employee = await this.repository.findById(dto.id!)

        if(!employee){
            throw new AreaNotFoundError()
        }

        return await this.repository.update(dto)
    }
}