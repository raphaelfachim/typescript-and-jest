import RegistroPonto from "../../../../core/entity/company/RegistroPonto";
import IRegistroDePontoRepository from "../../../repository/registroDePonto/IRegistroDePontoReposiory";
import { parseList } from "../parser/RegistroDePontoMockParser";
import { registrosPontos as mock } from "../MockRegistrosPontos";
export default class RegistroDePontoRepository implements IRegistroDePontoRepository{

  private registrosDePonto: RegistroPonto[];
  
  constructor () {
    this.registrosDePonto = parseList(mock);
  }

  buscarPontosPorUsuario(idColaborador: number): Promise<RegistroPonto[]> {
    return Promise.resolve(
      this.registrosDePonto.filter((registroDePonto) => {
        return registroDePonto.idColaborador === idColaborador;
      })
    );
  }

  buscarPontosPorUsuarioEPeriodo(idColaborador: number, dataIni: Date, dataFim?: Date): Promise<RegistroPonto[]> {
    return Promise.resolve(
      this.registrosDePonto.filter((registroDePonto) => {
        if(dataFim) {
          return registroDePonto.idColaborador === idColaborador && registroDePonto.dataEntrada > dataIni && registroDePonto.dataEntrada < dataFim;
        } else {
          return registroDePonto.idColaborador === idColaborador && registroDePonto.dataEntrada > dataIni;
        }
      })
    );
  }

}