import { AppDataSource } from "@shared/typeorm/dataSource.js"
import { Produto } from "../entities/Produto.js"

export const produtosRepositories = AppDataSource.getRepository(Produto).extend({
    async procurarPorNome(name: string): Promise<Produto | null> {
        return this.findOneBy({name})
    }
})
