import Colaborador from "../entity/company/Colaborador";
import RegistroPonto from "../entity/company/RegistroPonto";

export default class ColabroadorRegistraPontoUseCase {
  constructor( ){ }

  execute(colaborador: Colaborador, registroPonto: RegistroPonto){
    colaborador.registrosPonto.push(registroPonto);
   };
}