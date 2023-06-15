import { Area } from "../../models/area-model"
import { IAreaRepository, IUpdateAreaDTO } from "../../repositories/IArea-repository"
import { AreaNotFoundError } from "../errors/area-not-found"

export class UpdateAreaService {
    constructor(private areaRepository: IAreaRepository) { }

    async execute(areaProps: IUpdateAreaDTO) {

        const area = await this.areaRepository.findById(areaProps.id!)

        if(!area){
            throw new AreaNotFoundError()
        }

        return await this.areaRepository.update(areaProps)
    }
}