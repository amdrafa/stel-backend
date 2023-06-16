import { Area } from "../../models/area-model"
import { IAreaContactRepository, IUpdateAreaContactDTO } from "../../repositories/IArea-contact-repository"
import { IAreaCostCenterRepository } from "../../repositories/IArea-costcenter-repository"
import { AreaContactNotFoundError } from "../errors/area-contact-not-found"
import { AreaCostCenterNotFoundError } from "../errors/area-costcenter-not-found copy"

export class FindByIdAreaCostCenterService {
    constructor(private repository: IAreaCostCenterRepository) { }

    async execute(id: number) {

        const areaContact = await this.repository.findById(id)

        if(!areaContact){
            throw new AreaCostCenterNotFoundError()
        }

        return areaContact
    }
}