import "reflect-metadata"
import Colaborador from "../../../../../core/entity/company/Colaborador";
import RegistroPonto from "../../../../../core/entity/company/RegistroPonto";
import { RegistroPonto as RegistroPontoEntity } from "../entity/RegistroPonto.entity";
import { parseToCoreEntity as parseToColaborador, parseToDBEntity as parseToColaboradorEntity} from "./ColaboradorParser"

export function parseToDBEntity(registroPonto: RegistroPonto){
  let entity = new RegistroPontoEntity();

  entity.dataEntrada = registroPonto.dataEntrada;
  entity.dataSaida = registroPonto.dataSaida;

  return entity;
}

export function parseToCoreEntity(entity: RegistroPontoEntity, colaborador: Colaborador){
  return new RegistroPonto(
    entity.dataEntrada,
    entity.dataSaida,
    colaborador
  );
}

export function parseListToDBEntity(registros:  RegistroPonto[]): RegistroPontoEntity[]{
  return registros.map(r => parseToDBEntity(r));
}

export function parseListToCoreEntity(registros:  RegistroPontoEntity[], colaborador: Colaborador): RegistroPonto[]{
  return registros.map(r => parseToCoreEntity(r, colaborador));
}