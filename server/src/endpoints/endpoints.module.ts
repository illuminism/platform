import { Module } from '@nestjs/common';
import { PeopleService } from './people/people.service';
import { PeopleController } from './people/people.controller';
import { BuilderController } from './builder/builder.controller';


@Module({
  components: [PeopleService],
  controllers: [PeopleController, BuilderController],
})
export class EndpointsModule {
}
