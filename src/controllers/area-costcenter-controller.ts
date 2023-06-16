import { Request, Response } from "express";

import { z } from "zod";
import { AreaAlreadyExistsError } from "../services/errors/area-already-exists-error";
import { AreaNotFoundError } from "../services/errors/area-not-found";
import { makeDeleteAreaService } from "../factories/area/make-delete-area-service";
import { makeCreateAreaContactService } from "../factories/area-contact/make-create-area-contact-service";
import { AreaContactAlreadyExistsError } from "../services/errors/area-contact-already-exists-error";
import { makeUpdateAreaContactService } from "../factories/area-contact/make-update-area-contact-service";
import { AreaContactNotFoundError } from "../services/errors/area-contact-not-found";
import { makeListAreaContactService } from "../factories/area-contact/make-list-areas-contact-service";
import { makeFindByIdAreaContactService } from "../factories/area-contact/make-findById-areas-contact-servicets";
import { makeDeleteAreaContactService } from "../factories/area-contact/make-delete-area-contact-service";
import { makeCreateAreaCostCenterService } from "../factories/area-costcenter/make-create-area-costcenter-service";
import { AreaCostCenterAlreadyExistsError } from "../services/errors/area-costcenter-already-exists-error";
import { makeUpdateAreaCostCenterService } from "../factories/area-costcenter/make-update-area-costcenter-service";
import { AreaCostCenterNotFoundError } from "../services/errors/area-costcenter-not-found copy";
import { makeListAreaCostCenterService } from "../factories/area-costcenter/make-list-areas-costcenter-service";
import { makeFindByIdAreaCostCenterService } from "../factories/area-costcenter/make-findById-areas-costcenter-servicets";
import { makeDeleteAreaCostCenterService } from "../factories/area-costcenter/make-delete-area-costcenter-service";

export class AreaCostCenterController {

    async create(request: Request, response: Response) {

        const areaBodySchema = z.object({
            id: z.number()
        })

        const areaCostCenterBodySchema = z.object({
            code: z.string(),
            description: z.string(),
            hourRate: z.number(),
            grossTariff: z.number(),
            netTariff: z.number(),
            area: areaBodySchema
        })

        const { code, description, hourRate, grossTariff, netTariff, area  } = areaCostCenterBodySchema.parse(request.body)

        try {
            const service = makeCreateAreaCostCenterService()
            const areaCostCenter = await service.execute({ code, description, hourRate, grossTariff, netTariff, area  })

            return response.status(201).json({ areaCostCenter })
        } catch (error) {
            if (error instanceof AreaCostCenterAlreadyExistsError) {
                return response.status(409).json({ message: "Area cost center already registered." })
            }
            throw error
        }

    }

    async update(request: Request, response: Response) {

        const areaCostCenterBodySchema = z.object({
            id: z.number(),
            code: z.string(),
            description: z.string(),
            hourRate: z.number(),
            grossTariff: z.number(),
            netTariff: z.number()
        })

        const { id, code, description, hourRate, grossTariff, netTariff  } = areaCostCenterBodySchema.parse(request.body)

        try {
            const service = makeUpdateAreaCostCenterService()
            const areaCostCenter = await service.execute({ id, code, description, hourRate, grossTariff, netTariff })

            return response.status(200).json({ areaCostCenter })
        } catch (error) {
            if (error instanceof AreaCostCenterNotFoundError) {
                return response.status(404).json({ message: "Area cost center not found." })
            }
            throw error
        }

    }

    async list(request: Request, response: Response) {

        try {
            const service = makeListAreaCostCenterService()
            const areaCostCenter = await service.execute()

            return response.status(200).json({ areaCostCenter })
        } catch (error) {
            throw new Error()
        }
    }

    async findById(request: Request, response: Response) {

        try {
            const service = makeFindByIdAreaCostCenterService()
            const areaCostCenter = await service.execute(Number(request.params.id))

            return response.status(200).json({ areaCostCenter })
        } catch (error) {
            if (error instanceof AreaCostCenterNotFoundError) {
                return response.status(404).json({ message: "Area cost center not found." })
            }
            throw error
        }
    }
    
    async delete(request: Request, response: Response) {

        try {
            const service = makeDeleteAreaCostCenterService()
            const deleted = await service.execute(Number(request.params.id))
            return response.status(200).json({ deleted })
        } catch (error) {
            if (error instanceof AreaCostCenterNotFoundError) {
                return response.status(404).json({ message: "Area cost center not found." })
            }
            throw error
        }
    }
}