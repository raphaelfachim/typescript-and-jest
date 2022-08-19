export default class RegistroPonto {
  constructor(
    public dataEntrada: Date,
    public dataSaida: Date,
    public idColaborador: number
  ) { 
    this.valida(dataEntrada);
  }

  private valida(dataEntrada: Date) {
    if(!dataEntrada) throw new Error("Não é possivel criar um registro sem data de entrada");
  }
}