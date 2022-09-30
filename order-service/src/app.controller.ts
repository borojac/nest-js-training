import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';
import { EmptyRequest } from './interfaces/empty-request.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @GrpcMethod('OrderService', 'GetOrders')
  getOrders(data: EmptyRequest) {
    return this.appService.getOrders();
  }

}
