import "reflect-metadata"
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Colaborador } from "./Colaborador.entity";

@Entity()
export class RegistroPonto {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Colaborador, (colaborador) => colaborador.registrosPonto)
  colaborador: Colaborador;

  @Column()
  dataEntrada: Date;

  @Column({
    nullable: true
  })
  dataSaida: Date;

  @Column()
  diff: number;

  constructor() {
    this.diff = this.dataSaida ? this.dataSaida.getTime() - this.dataEntrada.getTime() : 0;
  }
}