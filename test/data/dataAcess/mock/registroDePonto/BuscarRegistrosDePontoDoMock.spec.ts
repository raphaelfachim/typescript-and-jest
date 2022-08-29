import Colaborador from "../../../../../src/core/entity/company/Colaborador";
import RegistroPonto from "../../../../../src/core/entity/company/RegistroPonto";
import ColaboradorRepository from "../../../../../src/data/dataAccess/mock/colaborador/ColaboradorRepository";
import RegistroDePontoRepository from "../../../../../src/data/dataAccess/mock/registroDePonto/RegistroDePontoRepository"
import { ajustaTimeZone } from "../../../../../src/util/dateUtil/dateUtil";

describe("Deve recuperar os registros de ponto a partir de um vetor de objetos mockado.", () => {

  const registroDePontoRepository = new RegistroDePontoRepository();
  const colaboradorRepository = new ColaboradorRepository();
  
  var raphael: Colaborador;
  beforeAll(async () => {
    raphael = await colaboradorRepository.buscarColaboradorPorNome("Raphael")
  });
  
  it("Deve recuperar todos os registros do usuário com id igual a 1", async () => {
    const registrosDePonto: RegistroPonto[] = await registroDePontoRepository.buscarPontosPorColaborador(raphael);
    expect(registrosDePonto.length).toBe(3);
  });

  it("Deve recuperar pontos filtrados por Id e Data Inicial", async () => {
    const registrosDePonto: RegistroPonto[] = await registroDePontoRepository.buscarPontosPorColaboradorEPeriodo(raphael, new Date(2022, 7, 1));
    expect(registrosDePonto.length).toBe(3);
  })

  it("Deve recuperar pontos filtrados por Id entre a Data Inicial e Final", async () => {
    const registrosDePonto: RegistroPonto[] = await registroDePontoRepository
                                                      .buscarPontosPorColaboradorEPeriodo(
                                                        raphael,
                                                        new Date(2022, 7, 1),
                                                        ajustaTimeZone(new Date(2022, 7, 17, 23, 59))
                                                      );
    expect(registrosDePonto.length).toBe(1);
  })

})