import { Area } from "../../models/area-model"
import { IAreaContactRepository, IUpdateAreaContactDTO } from "../../repositories/IArea-contact-repository"
import { IAreaCostCenterRepository, IUpdateAreaCostCenterDTO } from "../../repositories/IArea-costcenter-repository"
import { AreaContactNotFoundError } from "../errors/area-contact-not-found"
import { AreaCostCenterNotFoundError } from "../errors/area-costcenter-not-found copy"

export class UpdateAreaCostCenterervice {
    constructor(private repository: IAreaCostCenterRepository) { }

    async execute(areaCostCenterProps: IUpdateAreaCostCenterDTO) {

        const area = await this.repository.findById(areaCostCenterProps.id!)

        if(!area){
            throw new AreaCostCenterNotFoundError()
        }

        return await this.repository.update(areaCostCenterProps)
    }
}