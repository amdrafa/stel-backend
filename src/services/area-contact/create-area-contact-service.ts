import { AreaContact } from "../../models/area-contact-model"
import { Area } from "../../models/area-model"
import { IAreaContactRepository, IRegisterAreaContactDTO } from "../../repositories/IArea-contact-repository"
import { IAreaRepository, IRegisterAreaDTO } from "../../repositories/IArea-repository"
import { AreaAlreadyExistsError } from "../errors/area-already-exists-error"
import { AreaContactAlreadyExistsError } from "../errors/area-contact-already-exists-error"
import { AreaNotFoundError } from "../errors/area-not-found"

export class CreateAreaContactService {
    constructor(private areaContactRepository: IAreaContactRepository) { }

    async execute(areaContact: IRegisterAreaContactDTO): Promise<AreaContact> {

        const area = await this.areaContactRepository.findByEmail(areaContact.email)


        if(area){
            throw new AreaContactAlreadyExistsError()
        }

        return this.areaContactRepository.create(areaContact)
    }
}