import "reflect-metadata"
import { DataSource } from "typeorm"
import { Colaborador } from "./entity/Colaborador.entity";

export const AppDataSource = new DataSource ({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "example",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [ Colaborador ],
  subscribers: [],
  migrations: [],
})