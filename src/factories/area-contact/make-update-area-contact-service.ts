import { TypeOrmAreaContactRepository } from "../../repositories/typeorm/typeorm-area-contact-repository"
import { TypeOrmAreasRepository } from "../../repositories/typeorm/typeorm-areas-repository"
import { UpdateAreaContactService } from "../../services/area-contact/update-area-contact-service"
import { UpdateAreaService } from "../../services/area/update-area-service"


export function makeUpdateAreaContactService() {
    const areaRepository = new TypeOrmAreaContactRepository()
    return new UpdateAreaContactService(areaRepository)
}