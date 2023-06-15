import { Request, Response } from "express";
import { User } from "../models/user-model";
import { z } from "zod";
import { makeRegisterUserService } from "../factories/user/make-register-user-service";
import { UserAlreadyExistsError } from "../services/errors/user-already-exists-error";
import { makeLoginService } from "../factories/user/make-login-service";
import { UserPasswordIncorrectError } from "../services/errors/user-password-incorrect-error";
import jwt from "jsonwebtoken";
import { makeDeleteUserService } from "../factories/user/make-delete-user-service";
import { UserNotFoundError } from "../services/errors/user-not-found-error";
import { makeUpdateUserService } from "../factories/user/make-update-user-service";
import { makeListUserService } from "../factories/user/make-list-user-service";

export class UserController {

    async create(request: Request, response: Response) {
        const registerBodySchema = z.object({
            name: z.string(),
            password: z.string(),
            email: z.string()
        })

        const { name, password, email } = registerBodySchema.parse(request.body)

        try {
            const registerUserService = makeRegisterUserService()
            await registerUserService.execute({
                name,
                password,
                email
            })
            return response.status(201).json({ message: "User created." })
        } catch (error) {
            if (error instanceof UserAlreadyExistsError) {
                return response.status(409).json({ message: "E-mail already registered." })
            }
            throw error
        }
    }

    async login(request: Request, response: Response) {
        const registerBodySchema = z.object({
            email: z.string(),
            password: z.string()
        })

        const { password, email } = registerBodySchema.parse(request.body)

        try {
            const loginService = makeLoginService()
            const user = await loginService.execute(email, password)

            const token = jwt.sign({
                name: user.name,
                email: user.email,
                role: user.role,
                status: user.status
            },
            "stellantis-secret",
            { expiresIn: "8h" }
            )

            return response.status(200)
            .set('Authorization', 'Bearer ' + token)
            .json({ message: 'Successfully logged in.' });
        } catch (error) {
            if (error instanceof UserPasswordIncorrectError) {
                return response.status(409).json({ message: "E-mail or password incorrect." })
            }
            throw error
        }   
    }

    async list(request: Request, response: Response) {
        try {
            const service = makeListUserService()
            const users = await service.execute()
            return response.status(200).json({ users })
        } catch (error) {
            throw error
        }
    }

    async update(request: Request, response: Response) {
        const updateBodySchema = z.object({
            id: z.number(),
            name: z.string(),
            email: z.string(),
            password: z.string(),
            //status
        })

        const { id, name, email, password  } = updateBodySchema.parse(request.body)

        try {
            const service = makeUpdateUserService()
            await service.execute({
                id,
                name,
                email,
                password
            })
            return response.status(201).json({ message: "User updated." })
        } catch (error) {
            if (error instanceof UserNotFoundError) {
                return response.status(404).json({ message: "E-mail not fount." })
            }
            throw error
        }
    }

    async delete(request: Request, response: Response) {
        // const deleteBodySchema = z.object({
        //     id: z.number(),
        // })

        // const { id } = deleteBodySchema.parse(request.body)

        try {
            const service = makeDeleteUserService()
            await service.execute(Number(request.params.id))

            return response.status(200).json({ message: "User Deleted." })
        } catch (error) {
            if (error instanceof UserNotFoundError) {
                return response.status(404).json({ message: "E-mail not fount." })
            }
            throw error
        }
    }
}