import { registrosPontos } from "../../data/dataAccess/mock/MockRegistrosPontos";
import Colaborador from "../entity/company/Colaborador";
import RegistroPonto from "../entity/company/RegistroPonto";

export default class ColabroadorRegistraPontoUseCase {

  constructor( ){ }

  execute(colaborador: Colaborador, registrosPontos?: RegistroPonto[], registroPonto?: RegistroPonto){
    
    
    if(registroPonto) { 
      colaborador.registrosPonto.push(registroPonto);
    } else if(registrosPontos){
      const idsRegistros = registrosPontos.map((registro) => registro.colaborador.idPonto).reduce((a,b) => a + b, 0) / 
                            registrosPontos.length;
      if(idsRegistros != colaborador.idPonto) throw new Error(`O id dos registros não correspondem ao id do Colaborador [${idsRegistros} - ${colaborador.idPonto}]`);
      colaborador.registrosPonto.push.apply(colaborador.registrosPonto, registrosPontos);
    }
  }
}