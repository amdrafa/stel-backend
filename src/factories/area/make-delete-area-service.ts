import { TypeOrmAreasRepository } from "../../repositories/typeorm/typeorm-areas-repository"
import { DeleteAreaService } from "../../services/area/delete-area-service"


export function makeDeleteAreaService() {
    const areaRepository = new TypeOrmAreasRepository()
    return new DeleteAreaService(areaRepository)
}