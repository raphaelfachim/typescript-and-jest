import { Client } from "pg";
import { credentials } from "..";
import Colaborador from "../../../../../core/entity/company/Colaborador";
import IColaboradorRepository from "../../../../repository/colaborador/IColaboradorRepository";

export default class ColaboradorRepository implements IColaboradorRepository{
  
  cliente: Client;

  constructor( ) {
    
  }

  async buscarColaboradorPorNome(nome: string): Promise<Colaborador> {
    
    const sql = `SELECT * FROM COLABORADOR c WHERE c."nome" like '${nome}%'`;

    const colaboradorBD = await this.rodaQuery(sql);

    if(colaboradorBD.rows.length > 0) {
      return this.criaColaborador(colaboradorBD.rows[0])
    }

    throw new Error("Colaborador não encontrado.");
  }

  async buscarColaboradores(): Promise<Colaborador[]> {

    const sql = `SELECT * FROM COLABORADOR c`;

    const colaboradoresBD = await this.rodaQuery(sql);

    var colaboradores: Colaborador[] = [];
    colaboradoresBD.rows.forEach( colaborador => {
      colaboradores.push(this.criaColaborador(colaborador))
    });

    if(colaboradores.length > 0) return colaboradores;

    throw new Error("Erro ao buscar Colaboradores.");
  }

  async salvaColaborador(colaborador: Colaborador): Promise<Colaborador> {

    const sql = `INSERT INTO colaborador ("nomeCompleto", "cpf") VALUES 
    ('${colaborador.nome + " " + colaborador.sobrenome}', '${colaborador.cpf}')`;

    await this.rodaQuery(sql);

    return this.buscarColaboradorPorNome(colaborador.nome);
  }

  criaColaborador(colaboradorEntity: any): Colaborador{
    return new Colaborador(
      colaboradorEntity.nome.split(" ")[0],
      colaboradorEntity.nome.split(" ").splice(1).join(" ").trim(),
      colaboradorEntity.cpf,
      undefined
    );
  }

  async rodaQuery(querySQL: string): Promise<any> {
    this.cliente = new Client(credentials);
    await this.cliente.connect();
    const queryReturn = await this.cliente.query(querySQL);
    await this.cliente.end();
    return queryReturn;
  }

  
}