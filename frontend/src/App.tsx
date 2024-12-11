import React, { useState } from 'react';
import MessageList from './components/MessageList/MessageList';
import MessageFormModal from './components/MessageFormModal/MessageFormModal';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const messages = [
  { user: 'Anon', date: new Date(), content: 'New Content' },
  {
    user: 'Anon',
    date: new Date(),
    content: 'khkawdhawkjhdawkj hjkhkhakj akjdhakhdwak ',
  },
  { user: 'Anon', date: new Date(), content: 'New Content akdhaa' },
  { user: 'Anon', date: new Date(), content: 'New Content 123' },
  { user: 'Anon', date: new Date(), content: 'New Content 123' },
  { user: 'Anon', date: new Date(), content: 'New Content 123' },
  { user: 'Anon', date: new Date(), content: 'New Content 123' },
  { user: 'Anon', date: new Date(), content: 'New Content 123' },
  { user: 'Anon', date: new Date(), content: 'New Content 123' },
];

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement<{ elevation?: number }>;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}

export const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll>
        <AppBar
          position='sticky'
          elevation={4}
        >
          <Toolbar>
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1 }}
            >
              Anonymous Messageboard
            </Typography>
            <Button
              variant='contained'
              disableElevation
              onClick={() => setOpen(true)}
            >
              Add Message
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
          <MessageList messages={messages} />
        </Box>
      </Container>
      <MessageFormModal
        open={open}
        handleClose={handleClose}
      />
    </React.Fragment>
  );
};
