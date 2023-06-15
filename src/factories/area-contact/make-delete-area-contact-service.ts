import { TypeOrmAreaContactRepository } from "../../repositories/typeorm/typeorm-area-contact-repository"
import { TypeOrmAreasRepository } from "../../repositories/typeorm/typeorm-areas-repository"
import { DeleteAreaContactService } from "../../services/area-contact/delete-area-contact-service"
import { DeleteAreaService } from "../../services/area/delete-area-service"


export function makeDeleteAreaContactService() {
    const areaRepository = new TypeOrmAreaContactRepository()
    return new DeleteAreaContactService(areaRepository)
}