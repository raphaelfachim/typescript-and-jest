import "reflect-metadata"
import { Colaborador as ColaboradorEntity } from "../entity/Colaborador.entity"; 
import { Repository } from "typeorm"
import Colaborador from "../../../../../core/entity/company/Colaborador";
import IColaboradorRepository from "../../../../repository/colaborador/IColaboradorRepository";

export default class ColaboradorRepository extends Repository<ColaboradorEntity> implements IColaboradorRepository {

  buscarColaboradorPorNome(nome: string): Promise<Colaborador> {
    throw new Error("Method not implemented.");
  }
  buscarColaboradores(): Promise<Colaborador[]> {
    throw new Error("Method not implemented.");
  }

  salvarColaborador(colaborador: Colaborador): void {
    
    let entity = new ColaboradorEntity();
    entity.nome = colaborador.nome + " " + colaborador.sobrenome;
    entity.cpf = colaborador.cpf;
    entity.ehAtivo = colaborador.ativo;
    entity.ehClt = colaborador.ehClt;
    entity.email = colaborador.email;
    entity.idPonto = colaborador.idPonto;
    entity.usuario = colaborador.email.split('@')[0];


    console.log('Registrando colaborador  ' + entity.nome);
    
    this.save( entity );
  }
  
}