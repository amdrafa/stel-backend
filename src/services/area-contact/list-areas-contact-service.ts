import { AreaContact } from "../../models/area-contact-model"
import { Area } from "../../models/area-model"
import { IAreaContactRepository } from "../../repositories/IArea-contact-repository"
import { IAreaRepository } from "../../repositories/IArea-repository"

export class ListAreaContactService {
    constructor(private areaContactRepository: IAreaContactRepository) { }

    async execute(): Promise<AreaContact[] | null> {
        return await this.areaContactRepository.list()
    }
}