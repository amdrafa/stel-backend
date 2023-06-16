import { TypeOrmAreaCostCenterRepository } from "../../repositories/typeorm/typeorm-area-costcenter-repository"
import { ListAreaCostCenterervice } from "../../services/area-costcenter/list-areas-costcenter-service"

export function makeListAreaCostCenterService() {
    const repository = new TypeOrmAreaCostCenterRepository()
    return new ListAreaCostCenterervice(repository)
}