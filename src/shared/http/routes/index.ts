import { Router } from "express"

const routes = Router()

routes.get("/teste", (request, response) => {
    return response.json({ message: "Teste de conexao com o servidor" })
})

export default routes
