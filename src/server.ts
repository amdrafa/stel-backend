import { env } from "./env"
import { AppDataSource } from "./data-source"
import express from "express"
import "reflect-metadata"
import { router } from "./routes"
import bodyParser from "body-parser"
import swaggerUi from "swagger-ui-express"
import swaggerFile from "./swagger.json"


AppDataSource.initialize()
    .then(() => {
        // app.listen({
        //     host: '0.0.0.0',
        //     port: env.PORT,

        // }).then(() => {
        //     console.log("HTTP Server running with TypeOrm!")
        // })


        const app = express()

        app.use(bodyParser.json())

        app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

        app.use(router)

        app.listen(env.PORT, () => console.log(`Server is running on port ${env.PORT}`))
    })
    .catch((error) => console.log(error))