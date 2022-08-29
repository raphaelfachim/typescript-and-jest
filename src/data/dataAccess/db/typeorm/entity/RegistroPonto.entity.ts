import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Colaborador } from "./Colaborador.entity";

@Entity()
export class RegistroPonto {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  colaborador: Colaborador;

  @Column()
  dataEntrada: Date;

  @Column({
    nullable: true
  })
  dataSaida: Date;

  @Column()
  diff(): number {
    if (this.dataSaida) return (this.dataSaida.getTime() - this.dataEntrada.getTime());
    return 0;
  }
}