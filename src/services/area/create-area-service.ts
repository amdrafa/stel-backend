import { Area } from "../../models/area-model"
import { IAreaRepository, IRegisterAreaDTO } from "../../repositories/IArea-repository"
import { AreaAlreadyExistsError } from "../errors/area-already-exists-error"
import { AreaNotFoundError } from "../errors/area-not-found"

export class CreateAreaService {
    constructor(private areaRepository: IAreaRepository) { }

    async execute(areaProps: IRegisterAreaDTO): Promise<Area> {

        const area = await this.areaRepository.findByName(areaProps.name)

        if(area){
            throw new AreaAlreadyExistsError()
        }

        return this.areaRepository.create(areaProps)
    }
}