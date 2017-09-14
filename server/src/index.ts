import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import { ApplicationServer } from './ApplicationServer';
import * as cors from 'cors';
import * as mongoose from 'mongoose';
import { Transport } from '@nestjs/microservices';
import * as builder from './builder';


const bootupAscii = `
  ************************************************
  ********* Server: http://localhost:4202 ********
  ************************************************
       _ _ _                 _             _   _ 
    (_) | |               (_)           | | (_)
     _| | |_   _ _ __ ___  _ _ __   __ _| |_ _ 
    | | | | | | | '_ \` _ \\| | '_ \\ / _\` | __| |
    | | | | |_| | | | | | | | | | | (_| | |_| |
    |_|_|_|\\__,_|_| |_| |_|_|_| |_|\\__,_|\\__|_|

  ************************************************
  ********* Server: http://localhost:4202 ********
  ************************************************                                         
  `;


function addMiddleware(instance): void {
  instance.use(bodyParser.json());
  instance.use(cors());
}


function addMongo(): void {
  mongoose.connect('mongodb://mongodb:27017/test');
  (mongoose as any).Promise = Promise;
  mongoose.connection.on('error',
      console.error.bind(console, 'connection error:'));
  mongoose.connection.once('openUri', () => {
    console.log('connected');
  });
}


function setUpExpress(): void {
  const instance = express();
  addMongo();
  addMiddleware(instance);
  return instance;
}


async function main(port: number = 8191) {
  const app = await NestFactory.create(ApplicationServer, setUpExpress());
  builder.bootstrap();
  await app.connectMicroservice({ transport: Transport.TCP, });
  await app.startAllMicroservicesAsync();
  await app.listen(port, () => console.info(bootupAscii));
}

/** == ∆ + ENTRY POINT + ∆ == */
main(8191).then(console.log);
