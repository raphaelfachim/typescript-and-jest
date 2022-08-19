import Colaborador from "../../../../core/entity/company/Colaborador";
import IColaboradorRepository from "../../../repository/colaborador/IColaboradorRepository";
import { colaboradores as mock} from "../MockColaboradores";
import { parseList } from "../parser/ColaboradorMockParser";

export default class ColaboradorRepository implements IColaboradorRepository{
  
  private colaboradores: Colaborador[];

  constructor( ){
    this.colaboradores = parseList(mock);
  }

  buscarColaboradores(): Promise<Colaborador[]> {
    return Promise.resolve(this.colaboradores);
  }

  buscarColaboradorPorNome(nome: string): Promise<Colaborador> {
    return Promise.resolve(this.colaboradores.find(c => c.nome === nome));
  }


}