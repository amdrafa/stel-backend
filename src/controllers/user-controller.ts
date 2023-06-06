import { Request, Response } from "express";
import { User } from "../models/user-model";
import { z } from "zod";
import { makeRegisterUserService } from "../factories/make-register-user-service";
import { UserAlreadyExistsError } from "../services/errors/user-already-exists-error";

export class UserController {

    async create(request: Request, response: Response) {
        const registerBodySchema = z.object({
            name: z.string(),
            age: z.number(),
            email: z.string()
        })

        const { name, age, email } = registerBodySchema.parse(request.body)

        try {
            const registerUserService = makeRegisterUserService()
            await registerUserService.execute({
                name,
                age,
                email
            })
        } catch (error) {
            if (error instanceof UserAlreadyExistsError) {
                return response.status(409).json({ message: "E-mail already registered" })
            }
            throw error
        }

        return response.status(200).json({ message: "User created!" })
    }

}