import { TypeOrmEmployeeRepository } from "../../repositories/typeorm/typeorm-employee-repository"
import { CreateEmployeeService } from "../../services/employee/create-employee-service"


export function makeCreateEmployeeService() {
    const repository = new TypeOrmEmployeeRepository()
    return new CreateEmployeeService(repository)
}