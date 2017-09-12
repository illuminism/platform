import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';

@Controller()
export class BuilderEndpointController {
  @Client({ transport: Transport.TCP, port: 5667 })
  builder: ClientProxy;

  @Get('builder')
  public sendMessage(@Res() res: Response) {
    const pattern = { cmd: 'add' };
    const data = [ 1, 2, 3, 4, 5 ];

    this.builder.send(pattern, data)
        .subscribe((result) => (res.status as any)(HttpStatus.OK).json({ result }));
  }
}