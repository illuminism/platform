import { Controller, Get, HttpStatus, Response } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';

@Controller('builder')
export class BuilderEndpointController {
  @Client({ transport: Transport.TCP, port: 5667 })
  builder: ClientProxy;

  @Get()
  public sendMessage(@Response() res) {
    const pattern = { cmd: 'add' };
    const data = [ 1, 2, 3, 4, 5 ];
    // return res.status(HttpStatus.OK).json({})
    this.builder.send(pattern, data)
        .subscribe((result) => (res.status as any)(HttpStatus.OK).json({ result }));

  }
}
