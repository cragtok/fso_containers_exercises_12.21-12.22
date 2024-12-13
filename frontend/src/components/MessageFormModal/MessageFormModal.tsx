import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';

interface NewMessage {
  user?: string;
  content: string;
}

interface Props {
  open: boolean;
  handleClose: () => void;
  postMessage: (message: NewMessage) => void;
}

const FormModal: React.FC<Props> = ({ open, handleClose, postMessage }) => {
  const [formData, setFormData] = useState({ user: '', content: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.content) {
      alert('Message content is missing');
      return;
    }

    postMessage(formData);
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='form-modal-title'
        aria-describedby='form-modal-description'
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography
            id='form-modal-title'
            variant='h6'
            component='h2'
            gutterBottom
          >
            Submit Your Details
          </Typography>
          <form onSubmit={handleSubmit}>
            {/* Text Input */}
            <TextField
              label='Author'
              name='user'
              value={formData.user}
              onChange={handleChange}
              fullWidth
              margin='normal'
              variant='outlined'
            />

            {/* Textarea Input */}
            <TextField
              label='Content'
              name='content'
              value={formData.content}
              onChange={handleChange}
              fullWidth
              margin='normal'
              variant='outlined'
              multiline
              rows={4}
            />

            {/* Buttons */}
            <Box
              mt={2}
              display='flex'
              justifyContent='space-between'
            >
              <Button
                onClick={handleClose}
                color='secondary'
                variant='outlined'
              >
                Cancel
              </Button>
              <Button
                type='submit'
                color='primary'
                variant='contained'
              >
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default FormModal;
