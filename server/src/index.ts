import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as mongoose from 'mongoose';
import { ApplicationModule } from './application.module';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { Model } from 'mongoose';
import { IPersonModel, PersonSchema } from './endpoints/people/person';

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

// mongoose.connect(uri, <any>{
//   keepAlive : true,
//   reconnectTries: Number.MAX_VALUE,
//   useMongoClient: true
// });
export let Person;

async function  addMongo(): Promise<any> {
  const uri = 'mongodb://localhost:27017/test';
  const db = await mongoose.createConnection(uri);
  (mongoose as any).Promise = Promise;
  mongoose.connection.on('error',
      console.error.bind(console, 'connection error:'));
  mongoose.connection.once('open', () => {
    console.log('∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆');
  });
  (Person as Model<IPersonModel>) = db.model<IPersonModel>("Person", PersonSchema);
}


function setUpExpress(): void {
  const instance = express();
  addMongo();
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
