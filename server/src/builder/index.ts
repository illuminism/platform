import { NestFactory } from '@nestjs/core';
import { BuilderModule } from './builder.module';
import { Transport } from '@nestjs/microservices';

export async function bootstrap() {
  const app = await NestFactory.createMicroservice(BuilderModule, {
    transport: Transport.TCP,
  });
  app.listen(() => console.log('Microservice is listening'));
}
