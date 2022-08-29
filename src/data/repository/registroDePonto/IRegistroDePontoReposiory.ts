import Colaborador from "../../../core/entity/company/Colaborador";
import RegistroPonto from "../../../core/entity/company/RegistroPonto";

export default interface IRegistroDePontoRepository {

  buscarPontosPorColaborador(colaborador: Colaborador): Promise<RegistroPonto[]>;

  buscarPontosPorColaboradorEPeriodo(colaborador: Colaborador, dataIni: Date, dataFim?: Date): Promise<RegistroPonto[]>;
}