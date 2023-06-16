import { Area } from "../../models/area-model"
import { IAreaContactRepository } from "../../repositories/IArea-contact-repository"
import { IAreaCostCenterRepository } from "../../repositories/IArea-costcenter-repository"
import { IAreaRepository, IRegisterAreaDTO } from "../../repositories/IArea-repository"
import { AreaAlreadyExistsError } from "../errors/area-already-exists-error"
import { AreaCostCenterNotFoundError } from "../errors/area-costcenter-not-found copy"
import { AreaNotFoundError } from "../errors/area-not-found"

export class DeleteAreaCostCenterService {
    constructor(private repository: IAreaCostCenterRepository) { }

    async execute(id: number) {

        const area = await this.repository.findById(id)

        if(!area){
            throw new AreaCostCenterNotFoundError()
        }

        return await this.repository.delete(id)
    }
}