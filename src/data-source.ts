import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./models/user-model"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "stellantis",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})