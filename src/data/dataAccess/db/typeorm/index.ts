import "reflect-metadata"
import Colaborador from "../../../../core/entity/company/Colaborador";
import {Colaborador as ColaboradorEntity} from "./entity/Colaborador.entity";
import {RegistroPonto as RegistroPontoEntity } from "./entity/RegistroPonto.entity";
import ColaboradorRepository from "./repository/ColaboradorRepository";
import { EntityManager } from "typeorm"
import { AppDataSource } from "./OrmConfig";
import { parseToDBEntity as parse, parseToCoreEntity } from "./parser/ColaboradorParser"
import RegistroPonto from "../../../../core/entity/company/RegistroPonto";

async function initTransactions() {
  await AppDataSource.initialize();
}

const colaborador = new Colaborador(
  "Raphael",
  "Siller Fachim",
  "169.912.047-14",
  "raphael.fachim@etaure.com.br",
  true,
  true,
  1,
  []
);

// const ponto = new RegistroPonto(

// )

const entity = parse(colaborador);

initTransactions().then( async () => {

  if(AppDataSource.isInitialized) {

    /**
     * Repositório de COLABORADORES
     */
    const colRepo = AppDataSource.getRepository(ColaboradorEntity);

    const containsRows = await colRepo.count();
    
    if(!containsRows) {
      await colRepo.save(entity);
    }

    /**
     * Repositório de REGISTROS DE PONTO
     */

    const pontoRepo = AppDataSource.getRepository(RegistroPontoEntity)

  } else {

    console.log("Data source is not initialized");

  }

});
