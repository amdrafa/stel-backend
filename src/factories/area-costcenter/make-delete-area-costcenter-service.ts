import { TypeOrmAreaCostCenterRepository } from "../../repositories/typeorm/typeorm-area-costcenter-repository"
import { DeleteAreaCostCenterService } from "../../services/area-costcenter/delete-area-costcenter-service"

export function makeDeleteAreaCostCenterService() {
    const repository = new TypeOrmAreaCostCenterRepository()
    return new DeleteAreaCostCenterService(repository)
}