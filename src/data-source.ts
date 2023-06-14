import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./models/user-model"
import { Area } from "./models/area-model"
import { AreaContact } from "./models/area-contact-model"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "stellantis",
    synchronize: true,
    logging: true,
    entities: [User, Area, AreaContact],
    subscribers: [],
    migrations: [],
})