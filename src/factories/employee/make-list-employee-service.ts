import { TypeOrmEmployeeRepository } from "../../repositories/typeorm/typeorm-employee-repository"
import { ListEmployeeService } from "../../services/employee/list-employee-service"


export function makeListEmployeeService() {
    
    const repository = new TypeOrmEmployeeRepository()
    return new ListEmployeeService(repository)
}