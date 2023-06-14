import { Router } from "express"
import { userRoutes } from "./user-routes"
import { areaRoutes } from "./area-routes"

export const router = Router()

router.use("/user", userRoutes)

router.use("/area", areaRoutes)