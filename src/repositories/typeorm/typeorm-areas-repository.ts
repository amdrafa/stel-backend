import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../../data-source";
import { IAreaRepository, IRegisterAreaDTO, IUpdateAreaDTO } from "../IArea-repository";
import { Area } from "../../models/area-model";

export class TypeOrmAreasRepository implements IAreaRepository {

    private repository: Repository<Area>

    constructor() {
        this.repository = AppDataSource.getRepository(Area)
    }

    async findById(id: number) {
        return await this.repository.findOneBy({id: id}) 
    }

    async update(area: IUpdateAreaDTO){
        return await this.repository.update(area.id, area)
    }
    
    async list(){
        const areas = await this.repository.find({
            relations: ["contacts"]
        })
        return areas
    }
    
    async findByName(name: string){
        return await this.repository.findOneBy({name: name})
    }
    
    async create(area: IRegisterAreaDTO) {
        const newArea = this.repository.create(area)
        await this.repository.save(newArea)
        return newArea
    }

    async delete(id: number): Promise<DeleteResult> {
        //return await this.repository.softDelete({id: id})
        return await this.repository.delete({id: id})
    }


    async createTeste(area: Area): Promise<Area> {
        const newArea = this.repository.create(area)
        await this.repository.save(newArea)
        return newArea
    }

}