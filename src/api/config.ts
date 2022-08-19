const headers = {
  'Content-Type': 'application/json',
  'access-token': '$2a$10$Pzd9hJs1vAzCBlFXYm1qie/.0acq3j2Ite4Xj065uO0b1JJWc2WnO'
}

const apiConfig = {
  headers: headers
}

function uriUsuarioDetalhado(id) {
  return `https://api.pontomais.com.br/external_api/v1/employees/${id}?attributes=id,first_name,last_name,email,is_clt,cpf,time_card_source,has_time_cards,work_hours,cost_center,user`;
}

export { apiConfig, uriUsuarioDetalhado }