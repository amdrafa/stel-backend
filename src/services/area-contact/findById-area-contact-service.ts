import { Area } from "../../models/area-model"
import { IAreaContactRepository, IUpdateAreaContactDTO } from "../../repositories/IArea-contact-repository"
import { AreaContactNotFoundError } from "../errors/area-contact-not-found"

export class FindByIdAreaContactService {
    constructor(private areaRepository: IAreaContactRepository) { }

    async execute(id: number) {

        const areaContact = await this.areaRepository.findById(id)

        if(!areaContact){
            throw new AreaContactNotFoundError()
        }

        return areaContact
    }
}