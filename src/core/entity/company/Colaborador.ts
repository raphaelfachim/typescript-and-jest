import RegistroPonto from "./RegistroPonto";

export default class Colaborador {
  constructor(
    public nome: string,
    public sobrenome: string,
    public cpf: string,
    public email: string,
    public ativo?: boolean,
    public ehClt?: boolean,
    public idPonto?: number,
    public registrosPonto?: RegistroPonto[]
    ){ 
      registrosPonto = [];
    }
}