import RegistroPonto from "./RegistroPonto";

export default class Colaborador {

  public registrosPonto: RegistroPonto[] = [];

  constructor(
    public nome: string,
    public sobrenome: string,
    public cpf: string,
    public email: string,
    public ativo?: boolean,
    public ehClt?: boolean,
    public idPonto?: number,
    registrosPonto?: RegistroPonto[]
    ){ 
      this.registrosPonto.push.apply(this.registrosPonto, registrosPonto);
    }
}