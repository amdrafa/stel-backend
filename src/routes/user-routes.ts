import { Router } from "express";
import { UserController } from "../controllers/user-controller";

export const userRoutes = Router();


userRoutes.post("/login", new UserController().login)

userRoutes.post("/create", new UserController().create)

userRoutes.get("/list", new UserController().list)

userRoutes.put("/update", new UserController().update)

userRoutes.delete("/delete/:id", new UserController().delete)
