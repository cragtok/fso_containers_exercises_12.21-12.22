import { FC } from 'react';
import Message from '../Message/Message';

type MessageType = {
  user: string;
  date: Date;
  content: string;
};

interface MessageListProps {
  messages: MessageType[];
}

const MessageList: FC<MessageListProps> = ({ messages }) => {
  return (
    <>
      {messages.map((message: MessageType) => {
        return (
          <Message
            key={crypto.randomUUID()}
            user={message.user}
            date={message.date}
            content={message.content}
          />
        );
      })}
    </>
  );
};

export default MessageList;
