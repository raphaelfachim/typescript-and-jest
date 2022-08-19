import IApiDePonto from "../IApiDePonto";
import IController from "../IController";

export default class PontomaisContoller implements IController{
  
  constructor(private apiDePonto: IApiDePonto ){ }

  execute(param: any) {
    this.apiDePonto.buscarColaborador(param.id);
  }

}