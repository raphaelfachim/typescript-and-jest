import { apiConfig, uriUsuarioDetalhado } from "./config";
import axios from 'axios'


async function getUsuarioDetalhado(id) {
  const resposta = await axios.get(uriUsuarioDetalhado(id), apiConfig);
  return resposta.data;
}

getUsuarioDetalhado(1992178).then( (res) => {
  console.log(res);
})
