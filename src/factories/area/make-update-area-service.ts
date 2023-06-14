import { TypeOrmAreasRepository } from "../../repositories/typeorm/typeorm-areas-repository"
import { UpdateAreaService } from "../../services/area/update-area-service"


export function makeUpdateAreaService() {
    const areaRepository = new TypeOrmAreasRepository()
    const updateAreaService = new UpdateAreaService(areaRepository)

    return updateAreaService
}