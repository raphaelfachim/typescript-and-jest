import "reflect-metadata"
import { Entity, PrimaryGeneratedColumn, Column} from "typeorm"

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

  constructor( ) { }

}