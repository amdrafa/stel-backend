import { AreaContact } from "../../models/area-contact-model"
import { AreaCostCenter } from "../../models/area-costcenter-model"
import { Area } from "../../models/area-model"
import { IAreaContactRepository } from "../../repositories/IArea-contact-repository"
import { IAreaCostCenterRepository } from "../../repositories/IArea-costcenter-repository"
import { IAreaRepository } from "../../repositories/IArea-repository"

export class ListAreaCostCenterervice {
    constructor(private repository: IAreaCostCenterRepository) { }

    async execute(): Promise<AreaCostCenter[] | null> {
        return await this.repository.list()
    }
}