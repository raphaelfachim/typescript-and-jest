import "reflect-metadata"
import { Colaborador as ColaboradorEntity } from "../entity/Colaborador.entity"; 
import { Repository } from "typeorm"
import Colaborador from "../../../../../core/entity/company/Colaborador";
import IColaboradorRepository from "../../../../repository/colaborador/IColaboradorRepository";
import { AppDataSource } from "../OrmConfig";
import { parseToCoreEntity, parseToDBEntity, parseListToCoreEntity } from "../parser/ColaboradorParser"

export default class ColaboradorRepository implements IColaboradorRepository {

  private ds = AppDataSource;
  private repo: Repository<ColaboradorEntity>;

  async initRepo(){
    if (!this.ds.isInitialized) {
      await this.ds.initialize();
      this.repo = this.ds.getRepository(ColaboradorEntity);
    }
  }

  async buscarColaboradorPorNome(nome: string): Promise<Colaborador> {
    this.initRepo();
    try{
      const entity = await this.repo.createQueryBuilder("colaborador")
                .where(`colaborador.nome like '${nome}`)
                .getOneOrFail();
      return parseToCoreEntity(entity);
    } catch (err) {
      throw new Error("Colaborador não encontrado!");
    }
    
  }

  async buscarColaboradores(): Promise<Colaborador[]> {
    await this.initRepo();

    try {
      const entities = await this.repo.find({
        relations: {
          registrosPonto: true
        }
      });
      return parseListToCoreEntity(entities);
    } catch (err) { 
      console.log(err);
    }
  }

  salvarColaborador(colaborador: Colaborador): void {
    this.initRepo();
    this.repo.save(parseToDBEntity(colaborador))
  }
  
}