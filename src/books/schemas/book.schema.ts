
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Book extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  author: string;

  @Prop()
  price: number;

  @Prop()
  description: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
