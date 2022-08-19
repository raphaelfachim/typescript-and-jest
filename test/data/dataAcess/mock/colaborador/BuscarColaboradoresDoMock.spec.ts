import Colaborador from "../../../../../src/core/entity/company/Colaborador";
import ColaboradorRepository from "../../../../../src/data/dataAccess/mock/colaborador/ColaboradorRepository";

describe("Deve recuperar objetos da classe 'Colaborador' a partir de um vetor mockado", () => {
  const colaboradorRepository = new ColaboradorRepository();
  it("Deve buscar um colaborador pelo nome", async () => {
    const colaborador: Colaborador = await colaboradorRepository.buscarColaboradorPorNome("Raphael");
    expect(colaborador.cpf).toEqual("169.912.047-14");
  })

  it("Deve recuperar uma lista com 2 colaboradores cadastrados", async () => {
    const colaboradores: Colaborador[] = await colaboradorRepository.buscarColaboradores();
    expect(colaboradores.length).toBe(2);
    expect(colaboradores[1].nome).toEqual("João");
  })
})