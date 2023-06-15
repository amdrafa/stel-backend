import { Area } from "../../models/area-model"
import { IAreaContactRepository } from "../../repositories/IArea-contact-repository"
import { IAreaRepository, IRegisterAreaDTO } from "../../repositories/IArea-repository"
import { AreaAlreadyExistsError } from "../errors/area-already-exists-error"
import { AreaNotFoundError } from "../errors/area-not-found"

export class DeleteAreaContactService {
    constructor(private areaContactRepository: IAreaContactRepository) { }

    async execute(id: number) {

        const area = await this.areaContactRepository.findById(id)

        if(!area){
            throw new AreaNotFoundError()
        }

        return await this.areaContactRepository.delete(id)
    }
}