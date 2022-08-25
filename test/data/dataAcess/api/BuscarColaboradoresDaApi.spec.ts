import Colaborador from "../../../../src/core/entity/company/Colaborador";
import ColaboradorRepository from "../../../../src/data/dataAccess/api/colaborador/ColaboradorRepository";
import { buscaColaboradores } from "../../../../src/data/dataAccess/api/main";
import { parseList } from "../../../../src/data/dataAccess/api/parser/ColaboradorAPIParser";

describe("Deve recuperar objetos da classe 'Colaborador' a partir de um vetor mockado", () => {
  it("Deve buscar um colaborador pelo nome", async () => {
    const apiResponse = await buscaColaboradores();
    const colaboradores: Colaborador[] = parseList(apiResponse);
    const colaboradorRepository = new ColaboradorRepository(colaboradores);

    const raphael: Colaborador = await colaboradorRepository.buscarColaboradorPorNome('raphael');
    expect(raphael.email).toEqual('raphael.fachim@etaure.com.br');
  })

})