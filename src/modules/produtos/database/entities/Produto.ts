import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("produtos")
export class Produto {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ type: "text" })
    name: string;

    @Column({ type: "decimal" })
    preco: number;

    @Column({ type: "int" })
    quantidade: number;

    @CreateDateColumn({ type: "timestamp" })
    data_criacao: Date;

    @UpdateDateColumn({ type: "timestamp" })
    data_atualizacao: Date;
}
