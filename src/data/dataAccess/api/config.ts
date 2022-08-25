const headers = {
  'Content-Type': 'application/json',
  'access-token': '$2a$10$Pzd9hJs1vAzCBlFXYm1qie/.0acq3j2Ite4Xj065uO0b1JJWc2WnO'
}

const apiConfig = {
  headers: headers
}


const uriColaboradores = `https://api.pontomais.com.br/external_api/v1/employees?active=true&attributes=id,first_name,last_name,email,pin,is_clt,cpf,nis,registration_number,time_card_source,has_time_cards,use_qrcode,enable_geolocation,work_hours,cost_center,user,enable_offline_time_cards,login&count=true&page=1&per_page=30&sort_direction=asc&sort_property=first_name`;

export { apiConfig, uriColaboradores }