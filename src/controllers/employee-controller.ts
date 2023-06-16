import { Request, Response } from "express";

import { z } from "zod";
import { makeCreateEmployeeService } from "../factories/employee/make-create-employee-service";
import { EmployeeAlreadyExistsError } from "../services/errors/employe-already-exists-error";
import { makeUpdateEmployeeService } from "../factories/employee/make-update-employee-service";
import { EmployeeNotFoundError } from "../services/errors/employee-not-found";
import { EmployeeStatusEnum } from "../enums/employee-status";
import { makeListEmployeeService } from "../factories/employee/make-list-employee-service";
import { makeFindByIdEmployeeService } from "../factories/employee/make-findById-employe-service";
import { makeFindByEdvEmployeeService } from "../factories/employee/make-findByEdv-employe-service";
import { makeDeleteEmployeeService } from "../factories/employee/make-delete-employee-service";


export class EmployeeController {

    async create(request: Request, response: Response) {
        
        // ## NECESSÁRIO ENTENDER COMO VALIDAR A DATA COM ZOD

        // const employeeBodySchema = z.object({
        //     edv: z.number(),
        //     name: z.string(),
        //     position: z.string(),
        //     SAPStartDate: z.date(),
        //     CustomStartDate: z.date(),
        //     SAPEndDate: z.date(),
        //     CustomEndDate: z.date(),
        // })

        // const { edv, name, position, SAPStartDate, CustomStartDate, SAPEndDate, CustomEndDate  } = employeeBodySchema.parse(request.body)

        try {
            const service = makeCreateEmployeeService()
            //const employee = await service.execute({ edv, name, position, SAPStartDate, CustomStartDate, SAPEndDate, CustomEndDate })

            const employee = await service.execute(request.body)

            return response.status(201).json({ employee })
        } catch (error) {
            if (error instanceof EmployeeAlreadyExistsError) {
                return response.status(409).json({ message: "Employee already registered." })
            }
            throw error
        }

    }

    async update(request: Request, response: Response) {

        // const employeeBodySchema = z.object({
        //     id: z.number(),
        //     edv: z.number(),
        //     name: z.string(),
        //     position: z.string(),
        //     sapStartDate: z.date(),
        //     customStartDate: z.date(),
        //     sapEndDate: z.date(),
        //     customEndDate: z.date(),
        //     // status: EmployeeStatusEnum
        // })

        // const { id, edv, name, position, sapStartDate, customStartDate, sapEndDate, customEndDate  } = employeeBodySchema.parse(request.body)


        try {
            const serevice = makeUpdateEmployeeService()
            const status = EmployeeStatusEnum.disabled;
            //const areaContact = await serevice.execute({ id, edv, name, position, SAPStartDate, CustomStartDate, SAPEndDate, CustomEndDate, status })
            const areaContact = await serevice.execute(request.body)

            return response.status(200).json({ areaContact })
        } catch (error) {
            if (error instanceof EmployeeNotFoundError) {
                return response.status(404).json({ message: "Employee not found." })
            }
            throw error
        }

    }

    async list(request: Request, response: Response) {

        try {
            const service = makeListEmployeeService()
            const employees = await service.execute()

            

            return response.status(200).json({ employees })
        } catch (error) {
            throw error
        }
    }

    async findById(request: Request, response: Response) {

        try {
            const service = makeFindByIdEmployeeService()
            const employee = await service.execute(Number(request.params.id))

            return response.status(200).json({ employee })
        } catch (error) {
            if (error instanceof EmployeeNotFoundError) {
                return response.status(404).json({ message: "Employee not found." })
            }
            throw error
        }
    }

    async findByEdv(request: Request, response: Response) {

        try {
            const service = makeFindByEdvEmployeeService()
            const employee = await service.execute(Number(request.params.edv))
            return response.status(200).json({ employee })
        } catch (error) {
            if (error instanceof EmployeeNotFoundError) {
                return response.status(404).json({ message: "Employee not found." })
            }
            throw error
        }
    }
    
    async delete(request: Request, response: Response) {

        try {
            const service = makeDeleteEmployeeService()
            const employeeDeleted = await service.execute(Number(request.params.id))
            return response.status(200).json({ employeeDeleted })
        } catch (error) {
            if (error instanceof EmployeeNotFoundError) {
                return response.status(404).json({ message: "Employee not found." })
            }
            throw error
        }
    }
}