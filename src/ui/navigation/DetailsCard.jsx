import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography } from '@mui/material';

const DetailsCard = ({ open, handleClose, item }) => {
  if (!item) return null;

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{item.name}</DialogTitle>
      <DialogContent>
        <img src={item.image} alt={item.name} style={{ width: '100%', marginBottom: '20px' }} />
        <DialogContentText>
          {item.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailsCard;
