import { Area } from "../../models/area-model"
import { IAreaContactRepository, IUpdateAreaContactDTO } from "../../repositories/IArea-contact-repository"
import { AreaContactNotFoundError } from "../errors/area-contact-not-found"

export class UpdateAreaContactService {
    constructor(private areaRepository: IAreaContactRepository) { }

    async execute(areaContactProps: IUpdateAreaContactDTO) {

        const area = await this.areaRepository.findById(areaContactProps.id!)

        if(!area){
            throw new AreaContactNotFoundError()
        }

        return await this.areaRepository.update(areaContactProps)
    }
}