import { Module } from '@nestjs/common';
import { PeopleController } from './endpoints/people/people.controller';
import { PeopleService } from './endpoints/people/people.service';
import { BuilderEndpointController } from './endpoints/builder/builder.controller';

@Module({
  components: [PeopleService],
  controllers: [ PeopleController, BuilderEndpointController ],
})
export class ApplicationServer {


}
