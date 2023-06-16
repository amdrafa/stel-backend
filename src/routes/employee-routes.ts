import { Router } from "express";
import { EmployeeController } from "../controllers/employee-controller";

export const employeeRoutes = Router();

employeeRoutes.get("/findBy/:id", new EmployeeController().findById)

employeeRoutes.post("/create", new EmployeeController().create)

employeeRoutes.get("/list", new EmployeeController().list)

employeeRoutes.delete("/delete/:id", new EmployeeController().delete)

employeeRoutes.put("/update", new EmployeeController().update)