import { Area } from "../../models/area-model"
import { IAreaRepository } from "../../repositories/IArea-repository"

export class ListAreasService {
    constructor(private areaRepository: IAreaRepository) { }

    async execute(): Promise<Area[] | null> {

        const areas = await this.areaRepository.list()

        return areas
    }
}