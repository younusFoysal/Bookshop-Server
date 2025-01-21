import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://nestUser:AK3dyHk1La0SBDG2@cluster0.mquum9d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    BooksModule,
  ],
})
export class AppModule {}
