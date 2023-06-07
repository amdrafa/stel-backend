import { Request, Response } from "express";
import { User } from "../models/user-model";
import { z } from "zod";
import { makeRegisterUserService } from "../factories/make-register-user-service";
import { UserAlreadyExistsError } from "../services/errors/user-already-exists-error";
import { makeLoginService } from "../factories/make-login-service";
import { UserPasswordIncorrectError } from "../services/errors/user-password-incorrect-error";
import jwt from "jsonwebtoken";

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
            return response.status(200).json({ message: "User created." })
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

}