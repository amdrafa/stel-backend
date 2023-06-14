import { TypeOrmAreasRepository } from "../../repositories/typeorm/typeorm-areas-repository"
import { CreateAreaService } from "../../services/area/create-area-service"
import { ListAreasService } from "../../services/area/list-areas-service"


export function makeListAreaService() {
    const areaRepository = new TypeOrmAreasRepository()
    const listAreasService = new ListAreasService(areaRepository)

    return listAreasService
}