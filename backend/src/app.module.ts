import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@localhost:27017'),
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// PORT=3000 MONGODB_URI=mongodb://root:example@mongo:27017/messages npm run start:dev

// imports: [MongooseModule.forRoot(process.env.MONGODB_URI), MessagesModule],
