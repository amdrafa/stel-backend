import { TypeOrmAreaContactRepository } from "../../repositories/typeorm/typeorm-area-contact-repository"
import { TypeOrmEmployeeRepository } from "../../repositories/typeorm/typeorm-employee-repository"
import { FindByIdAreaContactService } from "../../services/area-contact/findById-area-contact-service"
import { FindByIdEmployeeService } from "../../services/employee/findById-employee-service"


export function makeFindByIdEmployeeService() {
    const repository = new TypeOrmEmployeeRepository()
    return new FindByIdEmployeeService(repository)
}