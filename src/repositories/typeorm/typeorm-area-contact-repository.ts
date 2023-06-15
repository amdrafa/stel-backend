import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../../data-source";
import { IRegisterAreaDTO, IUpdateAreaDTO } from "../IArea-repository";
import { Area } from "../../models/area-model";
import { IAreaContactRepository, IRegisterAreaContactDTO, IUpdateAreaContactDTO } from "../IArea-contact-repository";
import { AreaContact } from "../../models/area-contact-model";

export class TypeOrmAreaContactRepository implements IAreaContactRepository {

    private repository: Repository<AreaContact>

    constructor() {
        this.repository = AppDataSource.getRepository(AreaContact)
    }

    async create(areaContact: IRegisterAreaContactDTO): Promise<AreaContact> {
        const newAreaContact = this.repository.create(areaContact)
        await this.repository.save(newAreaContact)
        return newAreaContact
    }

    async update(areaContact: IUpdateAreaContactDTO): Promise<AreaContact | UpdateResult> {
        return await this.repository.update(areaContact.id, areaContact)
    }

    async list(): Promise<AreaContact[] | null> {
        return await this.repository.find()
    }

    async findById(id: number): Promise<AreaContact | null> {
        return await this.repository.findOneBy({id: id}) 
    }

    async findByEmail(email: string): Promise<AreaContact | null> {
        return await this.repository.findOneBy({email: email}) 
    }
    
    async delete(id: number): Promise<DeleteResult> {
        return await this.repository.delete({id: id})
    }
}