import { MessagesService } from './messages.service';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    createPost(createMessageDto: {
        user: string;
        content: string;
    }): Promise<import("./schemas/message.schema").Message>;
    getAllPosts(): Promise<import("./schemas/message.schema").Message[]>;
}
