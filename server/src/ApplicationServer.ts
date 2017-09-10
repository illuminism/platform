import { Module } from '@nestjs/common';
import { PeopleController } from './endpoints/people/people.controller';
import { PeopleService } from './endpoints/people/people.service';

@Module({
  components: [PeopleService],
  controllers: [ PeopleController ],
})
export class ApplicationServer {


}
