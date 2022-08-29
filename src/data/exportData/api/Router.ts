import HttpServer from "./HttpServer";

export default class Router {

  constructor(
    readonly httpServer: HttpServer
  ) { }

  async init(){
    this.httpServer.on("get", "/colaboradores", (req: any, res: any) => {
      return 'utilizando o método get';
    })
  
    this.httpServer.on("post", "/", (req: any, res: any) => {
      return 'utilizando o método post';
    })
  }
}