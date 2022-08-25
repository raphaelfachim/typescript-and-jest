import Colaborador from "../../../../core/entity/company/Colaborador";

export function parse(colaborador: any): Colaborador {
  return new Colaborador(
    colaborador.first_name,
    colaborador.last_name,
    colaborador.cpf,
    colaborador.email,
    colaborador.is_clt,
    colaborador.user.active,
    colaborador.id
  );
}

export function parseList(colaboradores: any[]): Colaborador[] {
  let parsedColaboradores: Colaborador[] = [];
  colaboradores.forEach( colaborador => {
    parsedColaboradores.push(parse(colaborador));
  });
  return parsedColaboradores;
}