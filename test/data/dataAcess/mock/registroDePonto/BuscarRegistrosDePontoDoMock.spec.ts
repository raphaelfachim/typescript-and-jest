import RegistroPonto from "../../../../../src/core/entity/company/RegistroPonto";
import RegistroDePontoRepository from "../../../../../src/data/dataAccess/mock/registroDePonto/RegistroDePontoRepository"
import { ajustaTimeZone } from "../../../../../src/util/dateUtil/dateUtil";

describe("Deve recuperar os registros de ponto a partir de um vetor de objetos mockado.", () => {
  const registroDePontoRepository = new RegistroDePontoRepository();
  it("Deve recuperar todos os registros do usuário com id igual a 1", async () => {
    const registrosDePonto: RegistroPonto[] = await registroDePontoRepository.buscarPontosPorUsuario(1);
    expect(registrosDePonto.length).toBe(3);
  });

  it("Deve recuperar pontos filtrados por Id e Data Inicial", async () => {
    const registrosDePonto: RegistroPonto[] = await registroDePontoRepository.buscarPontosPorUsuarioEPeriodo(1, new Date(2022, 7, 1));
    expect(registrosDePonto.length).toBe(3);
  })

  it("Deve recuperar pontos filtrados por Id entre a Data Inicial e Final", async () => {
    const registrosDePonto: RegistroPonto[] = await registroDePontoRepository
                                                      .buscarPontosPorUsuarioEPeriodo(
                                                        1,
                                                        new Date(2022, 7, 1),
                                                        ajustaTimeZone(new Date(2022, 7, 17, 23, 59))
                                                      );
    expect(registrosDePonto.length).toBe(1);
  })
})