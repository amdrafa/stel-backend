import { TypeOrmAreaContactRepository } from "../../repositories/typeorm/typeorm-area-contact-repository"
import { TypeOrmEmployeeRepository } from "../../repositories/typeorm/typeorm-employee-repository"
import { FindByIdAreaContactService } from "../../services/area-contact/findById-area-contact-service"
import { FindByEdvEmployeeService } from "../../services/employee/findByEdv-employee-service"
import { FindByIdEmployeeService } from "../../services/employee/findById-employee-service"


export function makeFindByEdvEmployeeService() {
    const repository = new TypeOrmEmployeeRepository()
    return new FindByEdvEmployeeService(repository)
}