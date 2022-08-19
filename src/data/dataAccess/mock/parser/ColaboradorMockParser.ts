import Colaborador from "../../../../core/entity/company/Colaborador";

export function parse(colaborador: any): Colaborador {
  return new Colaborador(
    colaborador.nome,
    colaborador.sobrenome,
    colaborador.cpf,
    null,
    undefined,
    undefined,
    colaborador.idPonto
  );
}

export function parseList(colaboradores: any[]): Colaborador[] {
  let parsedColaboradores: Colaborador[] = [];
  colaboradores.forEach( colaborador => {
    parsedColaboradores.push(parse(colaborador));
  });
  return parsedColaboradores;
}