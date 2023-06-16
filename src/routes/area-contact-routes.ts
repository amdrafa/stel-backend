import { Router } from "express";
import { AreaContactController } from "../controllers/area-contact-controller";

export const areaContactRoutes = Router();

areaContactRoutes.get("/findBy/:id", new AreaContactController().findById)

areaContactRoutes.post("/create", new AreaContactController().create)

areaContactRoutes.get("/list", new AreaContactController().list)

areaContactRoutes.delete("/delete/:id", new AreaContactController().delete)

areaContactRoutes.put("/update", new AreaContactController().update)