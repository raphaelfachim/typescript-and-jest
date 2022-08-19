import RegistroPonto from "../../../core/entity/company/RegistroPonto";

export default interface IRegistroDePontoRepository {
  buscarPontosPorUsuario(idColaborador: number): Promise<RegistroPonto[]>;

  buscarPontosPorUsuarioEPeriodo(idColaborador: number, dataIni: Date, dataFim?: Date): Promise<RegistroPonto[]>;
}