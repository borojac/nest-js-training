import { Injectable } from "@nestjs/common";
// import amqp from 'amqplib/callback_api';
const amqp = require('amqplib/callback_api');

@Injectable()
export class AppService {
    private readonly ORDERS = {
        orders: []
    }

    constructor() {
        let self = this;
        amqp.connect('amqp://127.0.0.1', function (error0, connection) {
            if (error0) {
                throw error0;
            }
            connection.createChannel(function (error1, channel) {
                if (error1) {
                    throw error1;
                }
                var queue = 'orders';

                channel.assertQueue(queue, {
                    durable: false
                });
                console.log(`Waiting for messages in ${queue}...`);
                channel.consume(queue, function (msg) {
                    self.ORDERS.orders.push(JSON.parse(msg.content.toString()));
                    console.log(self.ORDERS.orders)
                }, {
                    noAck: true
                });
            });
        });
    }

    getOrders() {
        return this.ORDERS;
    }
}