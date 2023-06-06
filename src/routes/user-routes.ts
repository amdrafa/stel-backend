import { Router } from "express";
import { UserController } from "../controllers/user-controller";

export const userRoutes = Router();

userRoutes.post("/create", new UserController().create)

// userRoutes.post("/list", new UserController().list)
