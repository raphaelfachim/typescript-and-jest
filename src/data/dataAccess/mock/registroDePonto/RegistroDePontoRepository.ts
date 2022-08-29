import RegistroPonto from "../../../../core/entity/company/RegistroPonto";
import IRegistroDePontoRepository from "../../../repository/registroDePonto/IRegistroDePontoReposiory";
import { parseList } from "../parser/RegistroDePontoMockParser";
import { registrosPontos as mock } from "../MockRegistrosPontos";
import Colaborador from "../../../../core/entity/company/Colaborador";
export default class RegistroDePontoRepository implements IRegistroDePontoRepository{

  private registrosDePonto: RegistroPonto[];
  
  constructor () {
    this.registrosDePonto = parseList(mock);
  }

  buscarPontosPorColaborador(colaborador: Colaborador): Promise<RegistroPonto[]> {
    return Promise.resolve(
      this.registrosDePonto.filter((registroDePonto) => {
        return registroDePonto.colaborador.email === colaborador.email;
      })
    );
  }

  buscarPontosPorColaboradorEPeriodo(colaborador: Colaborador, dataIni: Date, dataFim?: Date): Promise<RegistroPonto[]> {
    return Promise.resolve(
      this.registrosDePonto.filter((registroDePonto) => {
        if(dataFim) {
          return registroDePonto.colaborador.email === colaborador.email && registroDePonto.dataEntrada > dataIni && registroDePonto.dataEntrada < dataFim;
        } else {
          return registroDePonto.colaborador.email === colaborador.email && registroDePonto.dataEntrada > dataIni;
        }
      })
    );
  }

}