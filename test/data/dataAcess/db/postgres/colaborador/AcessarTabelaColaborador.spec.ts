import Colaborador from "../../../../../../src/core/entity/company/Colaborador";
import ColaboradorRepository from "../../../../../../src/data/dataAccess/db/postgres/colaborador/ColaboradorRepository"

describe("Deve realizar operações no banco de dados sobre a tabela de Colaboradores", () => {
  const colaboradorRepository = new ColaboradorRepository();
  it("Deve buscar um colaborador pelo nome", async () => {
    const colaborador = await colaboradorRepository.buscarColaboradorPorNome("Raphae");

    expect(colaborador.sobrenome).toEqual("Siller Fachim");
  })
  
  it("Deve buscar a lista de todos Colaboradores", async () => {
    const colaboradores = await colaboradorRepository.buscarColaboradores();

    expect(colaboradores.length).toBeGreaterThan(1);
  })

  it.skip("Deve salvar um novo Colaborador, e retorná-lo", async () => {
    const novoColaborador = await colaboradorRepository.salvaColaborador(new Colaborador(
      "João",
      "da Silva",
      "123.456.789-00",
      "joao.silva@etaure.com.br"
    ));

    expect(novoColaborador.cpf).toBe("123.456.789-00");
  })
})