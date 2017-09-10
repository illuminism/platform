import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import { ApplicationServer } from './ApplicationServer';
import * as cors from 'cors';

(async () => {
  const PORT = 8191;
  const instance = express();
  instance.use(bodyParser.json());
  instance.use(cors());
  const app = await NestFactory.create(ApplicationServer, instance);
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
