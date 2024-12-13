import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Define the document interface
export type MessageDocument = Message & Document;

@Schema()
export class Message {
  @Prop({ default: 'anonymous' })
  user: string;

  @Prop({ required: true })
  content: string;

  @Prop({ default: Date.now })
  date: Date;
}

// Generate the schema
export const MessageSchema = SchemaFactory.createForClass(Message);
