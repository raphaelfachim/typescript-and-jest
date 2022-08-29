import "reflect-metadata"
import Colaborador from "../../../../core/entity/company/Colaborador";
import {Colaborador as ColaboradorEntity} from "./entity/Colaborador.entity";
import {RegistroPonto as RegistroPontoEntity } from "./entity/RegistroPonto.entity";
import { AppDataSource } from "./OrmConfig";
import { parseToDBEntity as parse, parseToCoreEntity as parseColaboradorToCore } from "./parser/ColaboradorParser"
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


const colaborador2 = new Colaborador(
  "Lucas",
  "Silva e Silva",
  "123.456.789-02",
  "lucas.silva@etaure.com.br",
  true,
  true,
  3,
  []
);

const registroPonto1 = new RegistroPonto(
  new Date(2022, 7, 29, 8, 0),
  new Date(2022, 7, 29, 12, 0),
  colaborador2,
)

const registroPonto2 = new RegistroPonto(
  new Date(2022, 7, 29, 13, 0),
  new Date(2022, 7, 29, 17, 0),
  colaborador2,
)

const registroPonto3 = new RegistroPonto(
  new Date(2022, 7, 26, 8, 0),
  new Date(2022, 7, 26, 12, 0),
  colaborador2,
)

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
    const raphael = await colRepo.createQueryBuilder("colaborador")
                              .where("colaborador.nome like 'Raphael%'")
                              .getOne();
    
    const ponto = new RegistroPontoEntity();

    ponto.colaborador = raphael;
    ponto.dataEntrada = new Date(2022, 9, 29, 8, 0);
    ponto.dataSaida = new Date(2022, 9, 29, 12, 0);
    
    const pontoRepo = AppDataSource.getRepository(RegistroPontoEntity);

    // const novoPonto = await pontoRepo.save(ponto);
    // console.log(novoPonto);

    /**
     * Inserindo um Colaborador com Registros de Ponto em cascata
     */
    // colaborador2.registrosPonto.push(registroPonto1, registroPonto2, registroPonto3);

    // const novoColaborador = await colRepo.save(parse(colaborador2));
    // console.log(novoColaborador);
    
    const lucas = await colRepo.createQueryBuilder("colaborador")
                              .where("colaborador.nome like 'Lucas%'")
                              .innerJoinAndSelect("colaborador.registrosPonto", "pontos")
                              .getOne();

    console.log(lucas);
    
    const lucasCore: Colaborador = parseColaboradorToCore(lucas);
    console.log(lucasCore);
    
  } else {

    console.log("Data source is not initialized");

  }

});
