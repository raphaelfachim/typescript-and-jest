import ColaboradorRepository from "../../../../../../src/data/dataAccess/db/typeorm/repository/ColaboradorRepository"

describe("Manipulação das entidades do tipo Colaborador no banco de dados utilizando o framework TypeORM", () => {
  
  const colaboradorRepo = new ColaboradorRepository()
  it("Deve buscar todos os colaboradores", async () => {
    const colaboradores = await colaboradorRepo.buscarColaboradores();

    expect(colaboradores.length).toBe(4);
  })
})