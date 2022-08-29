import express, { Request, Response } from "express";
import ExpressAdapter from "./ExpressAdapter";
import HttpServer from "./HttpServer";
import Router from "./Router";


const httpServer: HttpServer = new ExpressAdapter();
const router: Router = new Router(httpServer);

console.log('index running');

router.init();
httpServer.listen(3000);