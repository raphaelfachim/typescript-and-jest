import { Colaborador as ColaboradorEntity } from "../entity/Colaborador.entity";
import Colaborador from "../../../../../core/entity/company/Colaborador";

export function parseToDBEntity(colaborador: Colaborador){
  let entity = new ColaboradorEntity();

  entity.nome = colaborador.nome + " " + colaborador.sobrenome;
  entity.cpf = colaborador.cpf;
  entity.ehAtivo = colaborador.ativo;
  entity.ehClt = colaborador.ehClt;
  entity.email = colaborador.email;
  entity.idPonto = colaborador.idPonto;
  entity.usuario = colaborador.email.split('@')[0];

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
    entity.idPonto
  );
}