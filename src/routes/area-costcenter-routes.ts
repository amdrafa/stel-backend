import { Router } from "express";
import { AreaCostCenterController } from "../controllers/area-costcenter-controller";

export const areaCostCenterRoutes = Router();

areaCostCenterRoutes.get("/findBy/:id", new AreaCostCenterController().findById)

areaCostCenterRoutes.post("/create", new AreaCostCenterController().create)

areaCostCenterRoutes.get("/list", new AreaCostCenterController().list)

areaCostCenterRoutes.delete("/delete/:id", new AreaCostCenterController().delete)

areaCostCenterRoutes.put("/update", new AreaCostCenterController().update)