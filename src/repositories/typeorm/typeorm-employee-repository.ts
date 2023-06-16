import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Employee } from "../../models/employee-model";
import { IEmployeeRepository, IRegisterEmployeeDTO, IUpdateEmployeeDTO } from "../IEmployee-repository";

export class TypeOrmEmployeeRepository implements IEmployeeRepository {

    private repository: Repository<Employee>

    constructor() {
        this.repository = AppDataSource.getRepository(Employee)
    }
    
    async create(employee: IRegisterEmployeeDTO): Promise<Employee> {
        const newEmployee = this.repository.create(employee)
        await this.repository.save(newEmployee)
        return newEmployee
    }

    async update(employee: IUpdateEmployeeDTO): Promise<Employee | UpdateResult> {
        return await this.repository.update(employee.id, employee)
    }
    
    async list(): Promise<Employee[]> {
        //return await this.repository.find({ select: { id: true } })
        
        console.log("passou por aqui")

        return await this.repository.find({ take: 10 })
    }

    async findById(id: number): Promise<Employee | null> {
        return await this.repository.findOneBy({id: id})
    }

    async findByEDV(edv: number): Promise<Employee | null> {
        return await this.repository.findOneBy({edv: edv}) 
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.repository.softDelete({id: id})
    }
}