import Colaborador from "../../../../core/entity/company/Colaborador";
import IColaboradorRepository from "../../../repository/colaborador/IColaboradorRepository";
import { buscaColaboradores } from "../main";
import { parseList } from "../parser/ColaboradorAPIParser";

export default class ColaboradorRepository implements IColaboradorRepository {

  constructor(
    public colaboradores: Colaborador[]
  ) {
   
  }

  buscarColaboradorPorNome(nome: string): Promise<Colaborador> {
    return Promise.resolve(this.colaboradores.find( (colaborador) => colaborador.nome.toLowerCase() === nome.toLowerCase()))
  }
  buscarColaboradores(): Promise<Colaborador[]> {
    return Promise.resolve(this.colaboradores);
  }

}