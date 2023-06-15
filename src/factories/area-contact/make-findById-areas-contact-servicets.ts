import { TypeOrmAreaContactRepository } from "../../repositories/typeorm/typeorm-area-contact-repository"
import { FindByIdAreaContactService } from "../../services/area-contact/findById-area-contact-service"


export function makeFindByIdAreaContactService() {
    const areaRepository = new TypeOrmAreaContactRepository()
    return new FindByIdAreaContactService(areaRepository)
}