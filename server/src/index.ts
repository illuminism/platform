import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';

import { ApplicationModule } from './application.module';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { connectToMongo } from './mongo';


enum Port  {
  Docker =  8191,
  Local = 4202,
}

const bootupAscii = `
  ∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆
    ∆∆∆∆ Server: http://localhost:${Port.Local} ∆∆∆∆
  ∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆
       _ _ _                 _             _   _ 
    (_) | |               (_)           | | (_)
     _| | |_   _ _ __ ___  _ _ __   __ _| |_ _ 
    | | | | | | | '_ \` _ \\| | '_ \\ / _\` | __| |
    | | | | |_| | | | | | | | | | | (_| | |_| |
    |_|_|_|\\__,_|_| |_| |_|_|_| |_|\\__,_|\\__|_|

  ∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆
    ∆∆∆∆ Server: http://localhost:${Port.Local} ∆∆∆∆
  ∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆                                         
  `;


function addMiddleware(instance): void {
  instance.use(bodyParser.json());
  instance.use(cors());
}


function setUpExpress(): void {
  const instance = express();
  connectToMongo();
  addMiddleware(instance);
  return instance;
}


async function main(port: number = 8191) {
  const app = await NestFactory.create(ApplicationModule, setUpExpress());

  await app.connectMicroservice({ transport: Transport.TCP, port: 5667});
  await app.startAllMicroservicesAsync();
  await app.listen(port, () => console.info(bootupAscii));
  return app;
}


/** == ∆ + ENTRY POINT + ∆ == */
main(Port.Docker).then(()=>'∆∆∆∆∆ loading ∆∆∆∆∆');
