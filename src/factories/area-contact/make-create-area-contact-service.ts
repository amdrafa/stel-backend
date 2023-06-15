import { TypeOrmAreaContactRepository } from "../../repositories/typeorm/typeorm-area-contact-repository"
import { TypeOrmAreasRepository } from "../../repositories/typeorm/typeorm-areas-repository"
import { CreateAreaContactService } from "../../services/area-contact/create-area-contact-service"
import { CreateAreaService } from "../../services/area/create-area-service"


export function makeCreateAreaContactService() {
    const areaRepository = new TypeOrmAreaContactRepository()
    return new CreateAreaContactService(areaRepository)
}