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

export class AreaContactController {

    async create(request: Request, response: Response) {

        const areaBodySchema = z.object({
            id: z.number()
        })

        const areaContacyBodySchema = z.object({
            name: z.string(),
            email: z.string(),
            area: areaBodySchema,
        })

        const { name, email, area  } = areaContacyBodySchema.parse(request.body)

        try {
            const createAreaContactService = makeCreateAreaContactService()
            const areaContact = await createAreaContactService.execute({
                name,
                email,
                area
            })

            return response.status(201).json({ areaContact })
        } catch (error) {
            if (error instanceof AreaContactAlreadyExistsError) {
                return response.status(409).json({ message: "Area already registered." })
            }
            throw error
        }

    }

    async update(request: Request, response: Response) {

        const areaContactBodySchema = z.object({
            id: z.number(),
            name: z.string(),
            email: z.string(),
        })

        const { id, name, email  } = areaContactBodySchema.parse(request.body)

        try {
            const updateAreaContactService = makeUpdateAreaContactService()
            const areaContact = await updateAreaContactService.execute({
                id,
                name,
                email
            })

            return response.status(200).json({ areaContact })
        } catch (error) {
            if (error instanceof AreaContactNotFoundError) {
                return response.status(404).json({ message: "Area not found." })
            }
            throw error
        }

    }

    async list(request: Request, response: Response) {

        try {
            const listAreaContactService = makeListAreaContactService()
            const areaContacts = await listAreaContactService.execute()

            return response.status(200).json({ areaContacts })
        } catch (error) {
            throw new Error()
        }
    }

    async findById(request: Request, response: Response) {

        try {
            const service = makeFindByIdAreaContactService()
            const areaContact = await service.execute(Number(request.params.id))

            return response.status(200).json({ areaContact })
        } catch (error) {
            if (error instanceof AreaContactNotFoundError) {
                return response.status(404).json({ message: "Area not found." })
            }
            throw error
        }
    }
    
    async delete(request: Request, response: Response) {

        try {
            const service = makeDeleteAreaContactService()
            const areaContactDeleted = await service.execute(Number(request.params.id))
            return response.status(200).json({ areaContactDeleted })
        } catch (error) {
            if (error instanceof AreaNotFoundError) {
                return response.status(404).json({ message: "Area not found." })
            }
            throw error
        }
    }

    async createTeste(request: Request, response: Response) {

        //const { name, description, contacts  } = registerAreaBodySchema.parse(request.body)

        console.log(request.body);
        console.log(request.body.name);

        try {
            // const createAreaService = makeCreateAreaService()
            // const area = await createAreaService.execute2(request.body)

            // return response.status(201).json({ area })

            return response.status(201).json("2")

        } catch (error) {
            if (error instanceof AreaAlreadyExistsError) {
                return response.status(409).json({ message: "Area already registered." })
            }
            throw error
        }
    }
}