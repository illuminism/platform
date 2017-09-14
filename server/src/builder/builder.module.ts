

import { Module } from '@nestjs/common';
import { BuilderController } from './builder.controller';

@Module({
  controllers: [ BuilderController ],
})
export class BuilderModule {}
