import "reflect-metadata"
import { Repository } from "typeorm";
import Colaborador from "../../../../../core/entity/company/Colaborador";
import RegistroPonto from "../../../../../core/entity/company/RegistroPonto";
import IRegistroDePontoRepository from "../../../../repository/registroDePonto/IRegistroDePontoReposiory";
import { RegistroPonto as RegistroPontoEntity } from "../entity/RegistroPonto.entity";

export default class RegistroPontoRepository extends Repository<RegistroPontoEntity> implements IRegistroDePontoRepository {

  buscarPontosPorColaborador(colaborador: Colaborador): Promise<RegistroPonto[]> {
    throw new Error("Method not implemented.");
  }
  buscarPontosPorColaboradorEPeriodo(colaborador: Colaborador, dataIni: Date, dataFim?: Date): Promise<RegistroPonto[]> {
    throw new Error("Method not implemented.");
  }

}