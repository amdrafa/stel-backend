import { TypeOrmAreaContactRepository } from "../../repositories/typeorm/typeorm-area-contact-repository"
import { TypeOrmAreasRepository } from "../../repositories/typeorm/typeorm-areas-repository"
import { ListAreaContactService } from "../../services/area-contact/list-areas-contact-service"
import { CreateAreaService } from "../../services/area/create-area-service"
import { ListAreasService } from "../../services/area/list-areas-service"


export function makeListAreaContactService() {
    const areaRepository = new TypeOrmAreaContactRepository()
    return new ListAreaContactService(areaRepository)
}