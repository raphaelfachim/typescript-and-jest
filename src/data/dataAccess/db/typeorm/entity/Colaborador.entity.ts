import "reflect-metadata"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"
import { RegistroPonto } from "./RegistroPonto.entity";

@Entity()
export class Colaborador {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  usuario: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column({
    nullable: true
  })
  dataNascimento: Date;

  @Column()
  idPonto: number;

  @Column()
  ehClt: boolean;

  @Column()
  ehAtivo: boolean;

  @OneToMany(() => RegistroPonto, (registroPonto) => registroPonto.colaborador, {
    cascade: true
  })
  registrosPonto: RegistroPonto[];

  constructor( ) { }

}