import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Response,
} from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Subscription } from 'rxjs/Subscription';


@Controller('builder')
export class BuilderController {
  @Client({
    transport: Transport.TCP,
    port: 5667,
  })
  builder: ClientProxy;

  @Post()
  public build(@Response() res, @Body() body): Subscription {
    const pattern = { cmd: 'add' };
    const data = body || [1, 2, 3, 4, 5];

    return this.builder.send<number>(pattern, data)
        .subscribe(
            (result) => (res.status as any)(HttpStatus.OK).json({ result }));
  }
}
