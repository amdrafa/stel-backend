import { TypeOrmAreaCostCenterRepository } from "../../repositories/typeorm/typeorm-area-costcenter-repository"
import { FindByIdAreaCostCenterService } from "../../services/area-costcenter/findById-area-costcenter-service"

export function makeFindByIdAreaCostCenterService() {
    const repository = new TypeOrmAreaCostCenterRepository()
    return new FindByIdAreaCostCenterService(repository)
}