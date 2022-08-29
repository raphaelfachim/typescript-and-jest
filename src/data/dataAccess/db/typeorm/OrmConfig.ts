import "reflect-metadata"
import { DataSource } from "typeorm"
import { Colaborador } from "./entity/Colaborador.entity";
import { RegistroPonto } from "./entity/RegistroPonto.entity";

export const AppDataSource = new DataSource ({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "example",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [ Colaborador, RegistroPonto ],
  subscribers: [],
  migrations: [],
})