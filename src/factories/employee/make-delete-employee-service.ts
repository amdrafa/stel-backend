import { TypeOrmEmployeeRepository } from "../../repositories/typeorm/typeorm-employee-repository"
import { DeleteEmployeeService } from "../../services/employee/delete-employee-service"


export function makeDeleteEmployeeService() {
    const repository = new TypeOrmEmployeeRepository()
    return new DeleteEmployeeService(repository)
}