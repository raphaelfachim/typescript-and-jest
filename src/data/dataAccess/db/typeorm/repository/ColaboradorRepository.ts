import Colaborador from "../../../../../core/entity/company/Colaborador";
import IColaboradorRepository from "../../../../repository/colaborador/IColaboradorRepository";

export default class ColaboradorRepository implements IColaboradorRepository {
  
  buscarColaboradorPorNome(nome: string): Promise<Colaborador> {
    throw new Error("Method not implemented.");
  }
  buscarColaboradores(): Promise<Colaborador[]> {
    throw new Error("Method not implemented.");
  }
  
}