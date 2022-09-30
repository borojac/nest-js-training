import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices'
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'order',
      protoPath: join(__dirname, "order/order.proto"),
      url: 'localhost:5002'
    }
  });

  app.listen();
}
bootstrap();
