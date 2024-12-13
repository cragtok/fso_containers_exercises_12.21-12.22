import { FC } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
} from '@mui/material';

interface MessageProps {
  _id: string;
  user: string;
  date: string;
  content: string;
}

function formatDate(date: Date) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0'); // Ensure two digits
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${month} ${day} ${year} ${hours}:${minutes}`;
}

const Message: FC<MessageProps> = ({ user, date, content }) => {
  return (
    <div>
      <Card sx={{ marginBottom: 2 }}>
        <CardHeader
          title={user}
          subheader={`Posted on ${formatDate(new Date(date))}`}
        />
        <Divider />
        <CardContent>
          <Typography variant='body1'>{content}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Message;
