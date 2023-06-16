import { TypeOrmAreaCostCenterRepository } from "../../repositories/typeorm/typeorm-area-costcenter-repository"
import { UpdateAreaCostCenterervice } from "../../services/area-costcenter/update-area-costcenter-service"

export function makeUpdateAreaCostCenterService() {
    const repository = new TypeOrmAreaCostCenterRepository()
    return new UpdateAreaCostCenterervice(repository)
}