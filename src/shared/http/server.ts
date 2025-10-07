import express from "express"
import cors from "cors"
import routes from "./routes/index.js"
import 'express-async-errors'
import ErrorHandleMiddleares from "@shared/middlewares/ErrorHandleMiddleares.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)
app.use(ErrorHandleMiddleares.handleError)

app.listen(3511, () => {
    console.log("Servidor rodando na porta 3511")
})
