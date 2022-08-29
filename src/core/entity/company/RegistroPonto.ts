import Colaborador from "./Colaborador";

export default class RegistroPonto {
  constructor(
    public dataEntrada: Date,
    public dataSaida: Date,
    public colaborador: Colaborador
  ) { 
    this.valida(dataEntrada);
  }

  private valida(dataEntrada: Date) {
    if(!dataEntrada) throw new Error("Não é possivel criar um registro sem data de entrada");
  }
}