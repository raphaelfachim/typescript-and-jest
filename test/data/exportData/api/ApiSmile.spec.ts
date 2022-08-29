import axios from "axios";
import { Colaborador as ColaboradorEntity } from "../../../../src/data/dataAccess/db/typeorm/entity/Colaborador.entity";

describe("Acessa a API interna do sistema", () => {
  const baseUrl = 'http://localhost:3000';

  it.skip("Deve buscar, via API, os colaboradores registrados no banco de dados", async () => {
    const url = baseUrl + '/colaboradores'
    const colaboradores = await axios.get(url, { headers: { 'Content-Type': 'application/json' }});
    console.log(colaboradores.data);
    expect(colaboradores.data.length).toBe(2);
  })

  it.skip("Deve adicionar um novo colaborador no banco de dados", async () => {
    const novoColaborador = {
      nome: "Maria Pereira",
      usuario: "maria.pereira",
      email: "maria.pereira@etaure.com.br",
      cpf: "123.456.789-01",
      dataNascimento: new Date(2000, 1, 1),
      idPonto: 3,
      ehClt: true,
      ehAtivo: true
    }

    const novoColaboradorJSON = JSON.stringify(novoColaborador);
    
    const url = baseUrl + '/colaborador'
    const colaborador = await axios.post(url, novoColaboradorJSON,{ headers: { 'Content-Type': 'application/json' }});
    
    expect(colaborador.data.id).toBeGreaterThan(14);
  })
})