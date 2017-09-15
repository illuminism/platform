import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Controller()
export class BuilderController {
  @MessagePattern({ cmd: 'add' })
  public add(data: number[]): Observable<number> {
    const numbers = data || [];
    return Observable.of(numbers.reduce((a, b) => a + b));
  }
}
