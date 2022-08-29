import { AppDataSource } from "../../dataAccess/db/typeorm/OrmConfig";
import { Colaborador as ColaboradorEntity} from "../../dataAccess/db/typeorm/entity/Colaborador.entity";
import HttpServer from "./HttpServer";

export default class Router {

  constructor(
    readonly httpServer: HttpServer
  ) { }

  async init(){
    const ds = await AppDataSource.initialize();

    this.httpServer.on("get", "/colaboradores", async (params: any, body: any) => {

      if(AppDataSource.isInitialized){

        const repo = ds.getRepository( ColaboradorEntity );
        return await repo.find();

      } else {
        throw new Error("Erro ao inicializar conexão com o banco de dados");
      }
    })
  
    this.httpServer.on("post", "/colaborador", async (params: any, body: any) => {

      const entity: ColaboradorEntity = new ColaboradorEntity();
      Object.assign(entity, body)
      
      
      if(AppDataSource.isInitialized){

        const repo = ds.getRepository( ColaboradorEntity );
        return await repo.save(entity);

      } else {
        throw new Error("Erro ao inicializar conexão com o banco de dados");
      }
      
    })

  }
}