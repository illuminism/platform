import { Module } from '@nestjs/common';
import { BuilderModule } from './builder/builder.module';
import { EndpointsModule } from './endpoints/endpoints.module';


@Module({
  modules: [
    BuilderModule,
    EndpointsModule,
  ],
})
export class ApplicationModule {
}
