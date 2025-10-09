import { Table, type MigrationInterface, type QueryRunner } from "typeorm";

export class CriarProdutos1759991418935 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "produtos",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },

                    {
                        name: "nome",
                        type: "varchar"
                    },

                    {
                        name: "preco",
                        type: "decimal",
                        precision: 10,
                        scale: 2
                    },

                    {
                        name: "quantidade",
                        type: "integer"
                    },

                    {
                        name: "data_criacao",
                        type: "timestamp",
                        default: "now()"
                    },

                    {
                        name: "data_atualizacao",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("produtos");
    }

}
