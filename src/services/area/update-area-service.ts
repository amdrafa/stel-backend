import { Area } from "../../models/area-model"
import { IAreaRepository, IUpdateAreaDTO } from "../../repositories/IArea-repository"
import { AreaNotFoundError } from "../errors/area-not-found"

export class UpdateAreaService {
    constructor(private areaRepository: IAreaRepository) { }

    async execute(areaProps: Area) {

        const area = await this.areaRepository.findById(areaProps?.id)

        if(!area){
            throw new AreaNotFoundError()
        }

        console.log(areaProps)
        
        const updatedArea = await this.areaRepository.update(areaProps)

        return null
    }
}