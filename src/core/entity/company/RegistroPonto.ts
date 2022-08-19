import Colaborador from "./Colaborador";

export default class RegistroPonto {
  constructor(
    private dataEntrada: Date,
    private dataSaida: Date,
    private colaborador: Colaborador
  ) { 
    this.valida(dataEntrada);
  }

  private valida(dataEntrada) {
    if(!dataEntrada) throw new Error("Não é possivel criar um registro sem data de entrada");
  }
}