

import { Module } from '@nestjs/common';
import { BuildereController } from './builder.controller';

@Module({
  controllers: [ BuildereController ],
})
export class BuilderModule {}