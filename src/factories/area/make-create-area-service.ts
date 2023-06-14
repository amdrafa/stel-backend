import { TypeOrmAreasRepository } from "../../repositories/typeorm/typeorm-areas-repository"
import { CreateAreaService } from "../../services/area/create-area-service"


export function makeCreateAreaService() {
    const areaRepository = new TypeOrmAreasRepository()
    const createAreaService = new CreateAreaService(areaRepository)

    return createAreaService
}