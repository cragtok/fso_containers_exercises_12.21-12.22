import { FC } from 'react';
import Message from '../Message/Message';

type MessageType = {
  _id: string;
  user: string;
  date: string;
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
            key={message._id}
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
