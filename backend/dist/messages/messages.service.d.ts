import { Model } from 'mongoose';
import { Message, MessageDocument } from './schemas/message.schema';
export declare class MessagesService {
    private messageModel;
    constructor(messageModel: Model<MessageDocument>);
    create(user: string, content: string): Promise<Message>;
    findAll(): Promise<Message[]>;
}
