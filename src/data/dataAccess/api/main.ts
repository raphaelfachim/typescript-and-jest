import { apiConfig, uriColaboradores } from "./config";
import axios from 'axios'


export async function buscaColaboradores() {
  const resposta = await axios.get(uriColaboradores, apiConfig);
  return resposta.data.employees;
}