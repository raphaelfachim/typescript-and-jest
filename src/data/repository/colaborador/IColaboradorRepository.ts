import Colaborador from "../../../core/entity/company/Colaborador";

export default interface IColaboradorRepository {

  buscarColaboradorPorNome(nome: string): Promise<Colaborador>;
  
  buscarColaboradores(): Promise<Colaborador[]>;
}