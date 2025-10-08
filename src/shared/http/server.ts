import "reflect-metadata"
import 'express-async-errors'
import express from "express"
import cors from "cors"

import routes from "./routes/index.js"
import ErrorHandleMiddleares from "@shared/middlewares/ErrorHandleMiddleares.js"
import { AppDataSource } from "@shared/typeorm/dataSource.js"

AppDataSource.initialize()
    .then(async () => {
        const app = express()

        app.use(cors())
        app.use(express.json())

        app.use(routes)
        app.use(ErrorHandleMiddleares.handleError)

        console.log("Conectado ao banco de dados")

        app.listen(3511, () => {
            console.log("Servidor rodando na porta 3511")
        })
    })

    .catch((error) => {
        console.error("Erro ao conectar com o banco de dados", error)
    })
