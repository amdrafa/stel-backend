import { Router } from "express";
import { AreaController } from "../controllers/area-controller";

export const areaRoutes = Router();

areaRoutes.post("/create", new AreaController().create)

areaRoutes.get("/list", new AreaController().list)

areaRoutes.put("/update", new AreaController().update)


