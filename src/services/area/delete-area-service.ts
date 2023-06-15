import { Area } from "../../models/area-model"
import { IAreaRepository, IRegisterAreaDTO } from "../../repositories/IArea-repository"
import { AreaAlreadyExistsError } from "../errors/area-already-exists-error"
import { AreaNotFoundError } from "../errors/area-not-found"

export class DeleteAreaService {
    constructor(private areaRepository: IAreaRepository) { }

    async execute(id: number) {

        const area = await this.areaRepository.findById(id)

        if(!area){
            throw new AreaNotFoundError()
        }

        return await this.areaRepository.delete(id)
    }
}