/* eslint-disable prettier/prettier */
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { LoggerMiddleware } from './logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { Item, ItemSchema } from './schemas/items.schema';

@Module({
  // imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/item-db'), 
  //           MongooseModule.forFeature([{name: Item.name, schema: ItemSchema}])],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('items')
  }

}
