import { TypeOrmEmployeeRepository } from "../../repositories/typeorm/typeorm-employee-repository"
import { UpdateEmployeeService } from "../../services/employee/update-employee-service"


export function makeUpdateEmployeeService() {
    const repository = new TypeOrmEmployeeRepository()
    return new UpdateEmployeeService(repository)
}