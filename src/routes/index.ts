import { Router } from "express"
import { userRoutes } from "./user-routes"
import { areaRoutes } from "./area-routes"
import { areaContactRoutes } from "./area-contact-routes"
import { employeeRoutes } from "./employee-routes"

export const router = Router()

router.use("/user", userRoutes)

router.use("/area", areaRoutes)

router.use("/areacontact", areaContactRoutes)

router.use("/employee", employeeRoutes)
