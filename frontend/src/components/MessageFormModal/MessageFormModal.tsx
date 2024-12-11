import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';

interface Props {
  open: boolean;
  handleClose: () => void;
}

const FormModal: React.FC<Props> = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({ title: '', description: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
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
              label='Title'
              name='title'
              value={formData.title}
              onChange={handleChange}
              fullWidth
              margin='normal'
              variant='outlined'
            />

            {/* Textarea Input */}
            <TextField
              label='Description'
              name='description'
              value={formData.description}
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
