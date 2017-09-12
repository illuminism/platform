import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import { ApplicationServer } from './ApplicationServer';
import * as cors from 'cors';
import * as mongoose from 'mongoose';
import { BuilderModule } from './builder/builder.module';

(async () => {
  const PORT = 8191;
  const instance = express();
  mongoose.connect('mongodb://mongodb:27017/test');
  (<any>mongoose).Promise = Promise;
  mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
  mongoose.connection.once('open', function() {
  //   we're connected!
    console.log('connected');
  });
  instance.use(bodyParser.json());
  instance.use(cors());
  const app = await NestFactory.create(ApplicationServer, instance);
  const microApp = NestFactory.createMicroservice(BuilderModule, { port: 3000 });
  app.listen(PORT, () => console.info(`
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
  `));

})();
