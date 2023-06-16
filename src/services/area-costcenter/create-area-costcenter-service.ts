import { AreaContact } from "../../models/area-contact-model"
import { AreaCostCenter } from "../../models/area-costcenter-model"
import { Area } from "../../models/area-model"
import { IAreaContactRepository, IRegisterAreaContactDTO } from "../../repositories/IArea-contact-repository"
import { IAreaCostCenterRepository, IRegisterAreaCostCenterDTO } from "../../repositories/IArea-costcenter-repository"
import { IAreaRepository, IRegisterAreaDTO } from "../../repositories/IArea-repository"
import { AreaAlreadyExistsError } from "../errors/area-already-exists-error"
import { AreaContactAlreadyExistsError } from "../errors/area-contact-already-exists-error"
import { AreaCostCenterAlreadyExistsError } from "../errors/area-costcenter-already-exists-error"
import { AreaNotFoundError } from "../errors/area-not-found"

export class CreateAreaCostCenterService {
    constructor(private repository: IAreaCostCenterRepository) { }

    async execute(areaCostCenter: IRegisterAreaCostCenterDTO): Promise<AreaCostCenter> {

        const area = await this.repository.findByCode(areaCostCenter.code)

        if(area){
            throw new AreaCostCenterAlreadyExistsError()
        }

        return this.repository.create(areaCostCenter)
    }
}