import { Request, Response } from "express";

import { z } from "zod";
import { makeCreateAreaService } from "../factories/area/make-create-area-service";
import { AreaAlreadyExistsError } from "../services/errors/area-already-exists-error";
import { makeListAreaService } from "../factories/area/make-list-areas-service";
import { makeUpdateAreaService } from "../factories/area/make-update-area-service";
import { AreaNotFoundError } from "../services/errors/area-not-found";

export class AreaController {

    async create(request: Request, response: Response) {

        const ContactAreaBodySchema = z.object({
            name: z.string(),
            email: z.string(),
        })   

        const registerAreaBodySchema = z.object({
            name: z.string(),
            description: z.string(),
            contacts: z.array(ContactAreaBodySchema),
        })

        const { name, description, contacts  } = registerAreaBodySchema.parse(request.body)

        try {
            const createAreaService = makeCreateAreaService()
            const area = await createAreaService.execute({
                name,
                description,
                contacts
            })

            return response.status(201).json({ area })
        } catch (error) {
            if (error instanceof AreaAlreadyExistsError) {
                return response.status(409).json({ message: "Area already registered." })
            }
            throw error
        }

    }

    async update(request: Request, response: Response) {

        const ContactAreaBodySchema = z.object({
            id: z.number(),
            name: z.string(),
            email: z.string(),
        })      

        const registerAreaBodySchema = z.object({
            id: z.number(),
            name: z.string(),
            description: z.string(),
            contacts: z.array(ContactAreaBodySchema),
        })

        const { id, name, description, contacts  } = registerAreaBodySchema.parse(request.body)

        try {
            const updateAreaService = makeUpdateAreaService()
            const area = await updateAreaService.execute({
                id,
                name,
                description,
                contacts
            })

            return response.status(200).json({ area })
        } catch (error) {
            if (error instanceof AreaNotFoundError) {
                return response.status(404).json({ message: "Area not found." })
            }
            throw error
        }

    }

    async list(request: Request, response: Response) {

        try {
            const listAreasService = makeListAreaService()
            const areas = await listAreasService.execute()

            return response.status(200).json({ areas })
        } catch (error) {
            throw new Error()
        }
    }
    
}