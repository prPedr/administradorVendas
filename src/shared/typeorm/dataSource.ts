import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";

const portaDb = process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432;

if (!process.env.DB_HOST || !process.env.DB_USERNAME || !process.env.DB_PASSWORD || !process.env.DB_DATABASE) {
    throw new Error("Variáveis de ambiente do banco não estão definidas!");
}

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: portaDb,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ["./src/modules/**/database/entities/*.{ts, js}"],
    migrations: ["./src/shared/typeorm/migrations/*.{ts, js}"],
});
