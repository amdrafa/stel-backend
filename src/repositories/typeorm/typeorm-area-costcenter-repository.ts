import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AreaContact } from "../../models/area-contact-model";
import { IAreaCostCenterRepository, IRegisterAreaCostCenterDTO, IUpdateAreaCostCenterDTO } from "../IArea-costcenter-repository";
import { AreaCostCenter } from "../../models/area-costcenter-model";

export class TypeOrmAreaCostCenterRepository implements IAreaCostCenterRepository {

    private repository: Repository<AreaCostCenter>

    constructor() {
        this.repository = AppDataSource.getRepository(AreaCostCenter)
    }

    async create(areaConstCenter: IRegisterAreaCostCenterDTO): Promise<AreaCostCenter> {
        const newAreaCostCenter = this.repository.create(areaConstCenter)
        await this.repository.save(newAreaCostCenter)
        return newAreaCostCenter
    }

    async update(areaConstCenter: IUpdateAreaCostCenterDTO): Promise<AreaCostCenter | UpdateResult> {
        return await this.repository.update(areaConstCenter.id, areaConstCenter)
    }

    async list(): Promise<AreaCostCenter[] | null> {
        return await this.repository.find()
    }

    async findById(id: number): Promise<AreaCostCenter | null> {
        return await this.repository.findOneBy({id: id}) 
    }

    async findByCode(code: string): Promise<AreaCostCenter | null> {
        return await this.repository.findOneBy({code: code}) 
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.repository.delete({id: id})
    }
}