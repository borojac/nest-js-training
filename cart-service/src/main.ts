import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { url } from 'inspector';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'cart',
      protoPath: join(__dirname, 'cart/cart.proto'),
      url: 'localhost:5001'
    }
  });

  app.listen();
}
bootstrap();
