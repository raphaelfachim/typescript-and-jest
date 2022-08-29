import RegistroPonto from "../../../../core/entity/company/RegistroPonto";
import { ajustaTimeZone } from "../../../../util/dateUtil/dateUtil";
import { parse as parseColaborador } from "../parser/ColaboradorMockParser";

export function parse(registroDePonto: any): RegistroPonto {
  return new RegistroPonto(
    ajustaTimeZone(registroDePonto.dataEntrada),
    ajustaTimeZone(registroDePonto.dataSaida),
    parseColaborador(registroDePonto.colaborador)
  );
}

export function parseList(registrosDePonto: any[]): RegistroPonto[] {
  let parsedRegistrosDePonto: RegistroPonto[] = [];
  registrosDePonto.forEach( registroDePonto => {
    parsedRegistrosDePonto.push(parse(registroDePonto));
  });
  return parsedRegistrosDePonto;
}