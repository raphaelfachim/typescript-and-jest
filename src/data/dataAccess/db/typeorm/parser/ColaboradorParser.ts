import "reflect-metadata"
import { Colaborador as ColaboradorEntity } from "../entity/Colaborador.entity";
import Colaborador from "../../../../../core/entity/company/Colaborador";
import { parseListToDBEntity as registroParseListToDBEntity, parseListToCoreEntity as registroParseListToCoreEntity} from "./RegistroPontoParser"

export function parseToDBEntity(colaborador: Colaborador){
  let entity = new ColaboradorEntity();

  entity.nome = colaborador.nome + " " + colaborador.sobrenome;
  entity.cpf = colaborador.cpf;
  entity.ehAtivo = colaborador.ativo;
  entity.ehClt = colaborador.ehClt;
  entity.email = colaborador.email;
  entity.idPonto = colaborador.idPonto;
  entity.usuario = colaborador.email.split('@')[0];
  entity.registrosPonto = registroParseListToDBEntity(colaborador.registrosPonto);
  return entity;
}

export function parseToCoreEntity(entity: ColaboradorEntity){
  return new Colaborador(
    entity.nome.split(" ")[0],
    entity.nome.split(" ").splice(1).join(" "),
    entity.cpf,
    entity.email,
    entity.ehAtivo,
    entity.ehClt,
    entity.idPonto,
    registroParseListToCoreEntity(entity.registrosPonto, this)
  );
}

export function parseListToDBEntity(colaboradores: Colaborador[]){
  return colaboradores.map( r => parseToDBEntity(r));
}

export function parseListToCoreEntity(entities: ColaboradorEntity[]){
  return entities.map( r => parseToCoreEntity(r));
}