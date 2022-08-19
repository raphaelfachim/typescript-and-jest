import Colaborador from "../../../src/core/entity/company/Colaborador";
import RegistroPonto from "../../../src/core/entity/company/RegistroPonto";
import ColabroadorRegistraPontoUseCase from "../../../src/core/useCases/ColaboradorRegistraProntoUseCase"
import ColaboradorRepository from "../../../src/data/dataAccess/mock/colaborador/ColaboradorRepository";
import RegistroDePontoRepository from "../../../src/data/dataAccess/mock/registroDePonto/RegistroDePontoRepository";

describe("Testes das entidades Colaborador e RegistroPonto", () => {

  const colaboradorRepository = new ColaboradorRepository();
  const registrosPontosRepository = new RegistroDePontoRepository();

  it("Deve adicionar um ponto à lista de pontos de um colaborador", async () => {
    const colaborador: Colaborador = await colaboradorRepository.buscarColaboradorPorNome("Raphael");
    const registroDePontos: RegistroPonto[] = await registrosPontosRepository.buscarPontosPorUsuario(1);

    const useCase = new ColabroadorRegistraPontoUseCase();

    useCase.execute(colaborador, registroDePontos);

    expect(colaborador.registrosPonto.length).toBe(3);
  })
})