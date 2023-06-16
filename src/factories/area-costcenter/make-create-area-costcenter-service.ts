import { TypeOrmAreaCostCenterRepository } from "../../repositories/typeorm/typeorm-area-costcenter-repository"
import { CreateAreaCostCenterService } from "../../services/area-costcenter/create-area-costcenter-service"

export function makeCreateAreaCostCenterService() {
    const repository = new TypeOrmAreaCostCenterRepository()
    return new CreateAreaCostCenterService(repository)
}