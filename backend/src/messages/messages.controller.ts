import { Controller, Get, Post, Body } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  async createPost(
    @Body() createMessageDto: { user: string; content: string },
  ) {
    return this.messagesService.create(
      createMessageDto.user,
      createMessageDto.content,
    );
  }

  @Get()
  async getAllPosts() {
    return this.messagesService.findAll();
  }
}
